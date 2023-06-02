import { Audit } from "lighthouse";

class DapAudit extends Audit {
  static get meta() {
    return {
      id: "dap",
      title: "Site includes Digital Analytics Program (DAP) code snippet",
      failureTitle:
        "The site does not include the Digital Analytics Program (DAP) code snippet",
      description:
        "All public facing sites shall implement the government wide Google Analytics for public-facing pages. https://digital.gov/guides/dap/",
      requiredArtifacts: ["ScriptElements"],
    };
  }

  static audit(artifacts) {
    const regex = new RegExp(
      "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js",
      "i"
    );

    return {
      score: Number(
        artifacts.ScriptElements.some((script) => regex.test(script.src))
      ),
    };
  }
}

export default DapAudit;
