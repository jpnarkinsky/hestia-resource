import { PackageRegistry } from "./PackageRegistry";
import { Package } from "./Package";
import nock from "nock";

import packageSearchResponse from "./fixtures/packageSearchResponse.json";
import versionListResponse from "./fixtures/versionListResponse.json";

describe("PackageRegistry", function () {
  const registry = new PackageRegistry();

  describe("search", function () {
    beforeEach(async function () {
      nock("https://packages.fhir.org")
        .get("/catalog")
        .query({ name: "hl7.fhir.us.davinci-pdex-plan-net" })
        .reply(200, packageSearchResponse);
    });

    it("should be able to find the pdex plan net packages", async function () {
      const packages = await registry.search({
        name: "hl7.fhir.us.davinci-pdex-plan-net",
      });

      expect(packages.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("versions", function () {
    beforeEach(async function () {
      nock("https://packages.fhir.org")
        .get("/hl7.fhir.us.davinci-pdex-plan-net")
        .reply(200, versionListResponse);
    });

    it("should be able to get package versions for pdex plan-net", async function () {
      const versions = await registry.versions(
        "hl7.fhir.us.davinci-pdex-plan-net"
      );
      expect(versions["1.1.0"]).toBeDefined;
      expect(versions["1.0.0"]).toBeDefined;
    });
  });

  describe("resolve", function () {
    beforeEach(async function () {
      nock("https://packages.fhir.org")
        .get("/hl7.fhir.us.davinci-pdex-plan-net")
        .reply(200, versionListResponse);
    });

    it("should be able to resolve the latest version of plan net", async function () {
      const { url } = await registry.resolve(
        "hl7.fhir.us.davinci-pdex-plan-net"
      );
      expect(url).toEqual(
        "https://packages.simplifier.net/hl7.fhir.us.davinci-pdex-plan-net/1.1.0"
      );
    });

    it("Should be able to resolve a specific version of plan net", async function () {
      const { url } = await registry.resolve(
        "hl7.fhir.us.davinci-pdex-plan-net@0.1.0"
      );
      expect(url).toEqual(
        "https://packages.simplifier.net/hl7.fhir.us.davinci-pdex-plan-net/0.1.0"
      );
    });
  });

  describe("load", function () {
    beforeEach(async function () {
      nock("https://packages.fhir.org")
        .get("/hl7.fhir.us.davinci-pdex-plan-net")
        .reply(200, versionListResponse);
      nock("https://packages.fhir.org")
        .get("/hl7.fhir.us.davinci-pdex-plan-net/1.1.0")
        .reply(200, versionListResponse);
    });

    it("should be able to get the latest version of plan net", async function () {
      const pkg = await registry.load("hl7.fhir.us.davinci-pdex-plan-net");
      expect(pkg).toBeInstanceOf(Package);
    }, 100000);
  });
});
