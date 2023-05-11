import { Configuration } from "./Configuration";

describe("Configuration", function () {
  describe("Configuration.from", function () {
    let config: Configuration;
    beforeAll(function () {
      config = Configuration.from({
        generatorName: "TypeScript",
        packages: ["hl7.fhir.us.davinci-pdex-plan-net@1.1.0"],
        features: {
          codeSystemEnums: true,
        },
        profiles: [
          "plannet-Practitioner",
          "plannet-Organization",
          "plannet-PractitionerRole",
        ],
        ignore: ["plannet-Endpoint"],
      });
    });

    it("Should be able to build a configuration from an object", function () {
      expect(Configuration.data).not.toBeNull;
    });

    it("Should have gotten the packages", function () {
      expect(Configuration.data.packages).toContain(
        "hl7.fhir.us.davinci-pdex-plan-net@1.1.0"
      );
    });

    it("should have gotten the ignore list", function () {
      expect(Configuration.data.ignore).toContain("plannet-Endpoint");
    });

    it("should have gotten the configuration", function () {
      expect(Configuration.data.features).toEqual({
        codeSystemEnums: true,
      });
    });
  });

  it("Should be able to load a configuration from a yaml file", async function () {
    await Configuration.fromFile("src/fixtures/davinci-pdex-plannet.yaml");
  });

  it("Should reject invalid configurations", async function () {
    expect(() => Configuration.fromFile("src/fixtures/foo.yaml")).toThrowError;
  });
});
