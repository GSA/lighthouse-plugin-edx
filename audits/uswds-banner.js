import { Audit } from "lighthouse";

class UswdsBannerAudit extends Audit {
  static get meta() {
    return {
      id: "uswds-banner",
      title: "Site includes the USWDS banner component",
      failureTitle: "The site does not include the USWDS banner component",
      description:
        "Sites should implement the USWDS Banner component and place it at the top of every page.",
      requiredArtifacts: ["MainDocumentContent"],
    };
  }

  static audit(artifacts) {
    const regex = new RegExp("usa-banner");

    return {
      score: Number(regex.test(artifacts.MainDocumentContent)),
    };
  }
}

export default UswdsBannerAudit;
