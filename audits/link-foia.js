import { Audit } from "lighthouse";

class LinkFoiaAudit extends Audit {
  static get meta() {
    return {
      id: "link-foia",
      title: "Site includes an FOIA link",
      failureTitle: "The site does not include an FOIA link",
      description:
        "All sites should link to GSA.gov's page regarding Freedom of Information Act requests.",
      requiredArtifacts: ["AnchorElements"],
    };
  }

  static audit(artifacts) {
    const regex = /reference\/freedom-of-information-act-foia|\/node\80729/i;

    return {
      score: Number(
        artifacts.AnchorElements.some((anchor) => regex.test(anchor.href))
      ),
    };
  }
}

export default LinkFoiaAudit;
