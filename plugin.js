export default {
  audits: [
    { path: "lighthouse-plugin-edx/audits/dap.js" },
    { path: "lighthouse-plugin-edx/audits/hsts.js" },
    { path: "lighthouse-plugin-edx/audits/link-accessibility.js" },
    { path: "lighthouse-plugin-edx/audits/link-contact.js" },
    { path: "lighthouse-plugin-edx/audits/link-foia.js" },
    { path: "lighthouse-plugin-edx/audits/link-privacy.js" },
    { path: "lighthouse-plugin-edx/audits/search.js" },
    { path: "lighthouse-plugin-edx/audits/uswds-banner.js" },
    { path: "lighthouse-plugin-edx/audits/uswds-identifier.js" },
  ],
  category: {
    title: "GSA EDX",
    description: "Results for GSA EDX",
    auditRefs: [
      { id: "dap", weight: 1, group: "other" },
      { id: "hsts", weight: 1, group: "other" },
      { id: "link-accessibility", weight: 1, group: "links" },
      { id: "link-contact", weight: 1, group: "links" },
      { id: "link-foia", weight: 1, group: "links" },
      { id: "link-privacy", weight: 1, group: "links" },
      { id: "search", weight: 1, group: "other" },
      { id: "uswds-banner", weight: 1, group: "uswds" },
      { id: "uswds-identifier", weight: 1, group: "uswds" },
    ],
  },
  groups: {
    links: {
      title: "Required links",
    },
    other: {
      title: "Other checks",
    },
    uswds: {
      title: "U.S. Web Design System",
    },
  },
};
