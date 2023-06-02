import { Audit } from "lighthouse";

class SearchAudit extends Audit {
  static get meta() {
    return {
      id: "search",
      title: "Site includes the ability to search",
      failureTitle: "The site does not include the ability to search",
      description:
        "A search option shall be present on all pages within a site. USWDS offers handy templates for a header containing search or a stand alone search component. There are a number of options for including search on the site whether it be native capabilities within the existing website platform or using search.gov. Sites that only present a single page to the public and require authentication before doing anything are exempt from this requirement. A good example of this would be https://www.fairs.reporting.gov/FAIRS/s/login/",
      requiredArtifacts: ["MainDocumentContent"],
    };
  }

  static audit(artifacts) {
    const regex =
      /https:\/\/search.usa.gov\/search|https:\/\/search.gsa.gov\/search|<label.*?>.*?Search.*?<\/label>|placeholder=('|")Search|aria-label="search.*"|type="search"/i;

    return {
      score: Number(regex.test(artifacts.MainDocumentContent)),
    };
  }
}

export default SearchAudit;
