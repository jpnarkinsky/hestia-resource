import axios from "axios";
import { basename } from "path";
import { streamToBuffer } from "@jorgeferrero/stream-to-buffer";
import fhirpath from "fhirpath";
import unzipStream from "unzip-stream";
import { decode } from "ini";
import { createReadStream, existsSync, fstat } from "fs";

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
    ``;

    stream
      .pipe(unzipStream.Parse())
      .on("entry", async function (entry: any) {
        const filename = basename(entry.path);
        if (filename === "version.info") {
          const info = decode(
            (
              await streamToBuffer(entry as unknown as NodeJS.ReadableStream)
            ).toString()
          );

          result.version =
            (info.FHIR && info.FHIR.version) ||
            (info.fhir && info.fhir.version);

          if (!result.version) {
            console.log(info);
            throw new Error(`Couldn't extract fhir version`);
          }
          if (result.version.startsWith("5")) {
            result.version = "5";
          } else if (result.version.startsWith("4.3")) {
            result.version = "4b";
          } else if (result.version.startsWith("4")) {
            result.version = "4";
          } else if (result.version.startsWith("3")) {
            result.version = "3";
          } else if (result.version.startsWith("2")) {
            result.version = "2";
          }

          console.log(`Got version of ${result.version}`);
        } else if (
          filename == "profiles-types.json" ||
          filename == "profiles-resources.json"
        ) {
          console.log(`Processing ${entry.path}`);
          const bundle = JSON.parse(
            (
              await streamToBuffer(entry as unknown as NodeJS.ReadableStream)
            ).toString()
          );

          for (let structure of fhirpath.evaluate(bundle, "entry.resource")) {
            result.structures.push(structure);
          }
        } else {
          entry.autodrain();
          console.error(`Skipped file: ${entry.path}`);
        }
      })
      .on("end", () => resolve(result))
      .on("error", (err: Error) => reject(err));
  });

  return result as LoaderResult;
}
