import { Audit } from "lighthouse";

class UswdsIdentifierAudit extends Audit {
  static get meta() {
    return {
      id: "uswds-identifier",
      title: "Site includes the USWDS identifier component",
      failureTitle: "The site does not include the USWDS identifier component",
      description:
        'Sites should implement the USWDS Identifier component and place it at the bottom of every page. This component serves as a home for required links such as FOIA, Privacy Policy, Accessibility, and others. The Identifier also helps denote which agency(s) operate the website. Specifically for OGP sites that live at top level domains such as sftool.gov, realpropertyprofile.gov, and others, the Identifier allows a site to maintain its distinct "brand" while also tying it back to the parent agency.',
      requiredArtifacts: ["MainDocumentContent"],
    };
  }

  static audit(artifacts) {
    const regex = new RegExp("usa-identifier");

    return {
      score: Number(regex.test(artifacts.MainDocumentContent)),
    };
  }
}

export default UswdsIdentifierAudit;
