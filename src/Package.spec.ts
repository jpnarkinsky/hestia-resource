import { PackageRegistry } from "./PackageRegistry";

describe("Package", function () {
  let pkg;

  beforeAll(async () => {
    pkg = await new PackageRegistry().load("hl7.fhir.us.davinci-pdex-plan-net");
  }, 30000);

  test("#list should return a list of profiles", async function () {
    expect(await pkg.list()).not.toHaveLength(0);
    expect(await pkg.list()).toContainEqual("plannet-Endpoint");
  });

  test("#getById should return a structure definition", async function () {
    let sd = await pkg.getStructureById("plannet-Practitioner");
    expect(sd).not.toBeNull;
  });

  test("#getById should return null on an unknown profile", async function () {
    let sd = await pkg.getStructureById("foo");
    expect(sd).toBeNull;
  });
});
