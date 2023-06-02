# EDX Lighthouse plugin

## Contents

- `package.json` - declares the plugin's entry point (`plugin.js`)
- `plugin.js` - instructs Lighthouse to run the plugin's own audits; describes the new category and its details for the report
- `audits/*.js` - the new audits to run in addition to Lighthouse's default audits

## Setup
```sh
mkdir edx-wrapper && cd edx-wrapper && \
npm init -y && \
yarn add -D lighthouse && \
yarn add -D gsa/lighthouse-plugin-edx#main
```

### Usage
>From within `wrapper` directory
```sh
yarn lighthouse {url} --plugins=lighthouse-plugin-edx
```
See [Lighthouse documentation](https://github.com/GoogleChrome/lighthouse/#cli-options) for additional options.
