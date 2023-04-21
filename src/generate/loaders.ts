import axios from "axios";
import { basename, extname } from "path";
import { streamToBuffer } from "@jorgeferrero/stream-to-buffer";
import fhirpath from "fhirpath";
import unzipStream from "unzip-stream";
import { createReadStream, existsSync, fstat } from "fs";
import Bluebird from "bluebird";

interface LoaderResult {
  version: string;
  structures: Array<any>;
}

export async function loadZip(location: string): Promise<LoaderResult> {
  let stream;
  if (existsSync(location)) {
    stream = createReadStream(location);
  } else {
    try {
      // Use the URL constructor to validate this is a URL
      new URL(location);
      let response = await axios({
        method: "GET",
        responseType: "stream",
        url: location,
      });
      stream = response.data;
    } catch (error) {
      throw new Error(
        `Couldn't find fetch a file at ${location}, locally or remotely: ${
          (error as Error).message
        }`
      );
    }
  }

  const result = await new Promise((resolve, reject) => {
    const result: LoaderResult = {
      version: "unknown",
      structures: [],
    };

    let bundles: any[] = [];

    stream
      .pipe(unzipStream.Parse())
      .on("entry", async function (entry: any) {
        const filename = basename(entry.path);

        if (
          filename == "profiles-types.json" ||
          filename == "profiles-resources.json" ||
          filename == "dataelements.json"
        ) {
          console.log(`Processing ${entry.path}`);
          bundles.push(
            streamToBuffer(entry as unknown as NodeJS.ReadableStream)
          );
        } else {
          entry.autodrain();
          console.error(`Skipped file: ${entry.path}`);
        }
      })
      .on("end", async () => {
        bundles = await Bluebird.map(bundles, (i) =>
          JSON.parse((i as unknown as NodeJS.ReadableStream).toString())
        );
        for (let structure of fhirpath.evaluate(
          bundles,
          "Bundle.entry.resource.where(resourceType='StructureDefinition')"
        )) {
          result.structures.push(structure);
        }
        resolve(result);
      })
      .on("error", (err: Error) => reject(err));
  });

  return result as LoaderResult;
}
