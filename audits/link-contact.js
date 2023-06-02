import { Audit } from "lighthouse";

class LinkFoiaAudit extends Audit {
  static get meta() {
    return {
      id: "link-contact",
      title: "Site includes a contact link",
      failureTitle: "The site does not include a contact link",
      description:
        "Sites should provide users contact information on each page. USWDS offers a nice pattern for this with their Footer component.",
      requiredArtifacts: ["AnchorElements"],
    };
  }

  static audit(artifacts) {
    const regex =
      /Contact Us|Contact|Get in touch|Email Us|Email|Get support|Help Desk|send us an email|d+(s|-)d+(s|-)d+|(d+)sd+-d+/i;

    return {
      score: Number(
        artifacts.AnchorElements.some((anchor) => regex.test(anchor.href))
      ),
    };
  }
}

export default LinkFoiaAudit;
