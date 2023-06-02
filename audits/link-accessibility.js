import { Audit } from "lighthouse";

class LinkAccessibilityAudit extends Audit {
  static get meta() {
    return {
      id: "link-accessibility",
      title: "Site includes an accessibility link",
      failureTitle: "The site does not include an accessibility link",
      description:
        "By default, sites should link to GSA's master Accessibility policy statement. In the event that a site requires something different, we can update our scanner to ensure proper credit.",
      requiredArtifacts: ["AnchorElements"],
    };
  }

  static audit(artifacts) {
    const regex =
      /website-information\/accessibility-aids|website-information\/website-policies|portal\/content\/116609/i;

    return {
      score: Number(
        artifacts.AnchorElements.some((anchor) => regex.test(anchor.href))
      ),
    };
  }
}

export default LinkAccessibilityAudit;
