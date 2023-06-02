import { Audit, NetworkRecords } from "lighthouse";

class HstsAudit extends Audit {
  static get meta() {
    return {
      id: "hsts",
      title: "Site has `Strict-Transport-Security` (HSTS) header",
      failureTitle:
        "Site has no or weak `Strict-Transport-Security` (HSTS) header",
      description:
        "Sites shall be served securely via HTTPS and implement the HTTP Strict Transport Security header.",
      requiredArtifacts: ["devtoolsLogs"],
    };
  }

  static async audit(artifacts, context) {
    // Lighthouse loads the page multiple times: while offline, without javascript, etc.
    // Use the devtools log from the default pass of the page.
    const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
    // Request the network records from the devtools log.
    // The `context` argument is passed in to allow Lighthouse to cache the result and not re-compute the network requests for every audit that needs them.
    const requests = await NetworkRecords.request(devtoolsLog, context);

    const hstsRequest = requests[0].responseHeaders.some(
      (header) => header.name.toLowerCase() === "strict-transport-security"
    );

    return {
      score: Number(hstsRequest),
    };
  }
}

export default HstsAudit;
