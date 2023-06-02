import { Audit } from "lighthouse";

class LinkPrivacyAudit extends Audit {
  static get meta() {
    return {
      id: "link-privacy",
      title: "Site includes a privacy link",
      failureTitle: "The site does not include a privacy link",
      description:
        "By default, sites should link to GSA's master Privacy policy statement. Most GSA sites are covered by this privacy policy. However, in the event that GSA's Chief Privacy Officer determines a distinct statement, we can update our scanner to ensure proper credit.",
      requiredArtifacts: ["AnchorElements"],
    };
  }

  static audit(artifacts) {
    const regexs = [
      /website-information\/website-policies|website-information\/privacy-and-security-notice|portal\/content\/116609/i,
      /<a.*?>(Privacy Policy|Privacy).*?<\/a>/i,
    ];

    return {
      score: Number(
        artifacts.AnchorElements.some((anchor) =>
          regexs.some((regex) => regex.test(anchor.href))
        )
      ),
    };
  }
}

export default LinkPrivacyAudit;
