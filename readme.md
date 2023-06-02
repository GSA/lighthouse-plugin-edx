# EDX Lighthouse plugin

## Contents

- `package.json` - declares the plugin's entry point (`plugin.js`)
- `plugin.js` - instructs Lighthouse to run the plugin's own `preload-as.js` audit; describes the new category and its details for the report
- `audits/*.js` - the new audits to run in addition to Lighthouse's default audits

## To develop as a plugin developer

Run the following to start of with the recipe as a template:

```sh
git clone git@github.com:GSA/lighthouse-plugin-edx.git
cd lighthouse-plugin-edx
```

Install and run just your plugin:

```sh
yarn
NODE_PATH=.. yarn lighthouse https://example.gov --plugins=lighthouse-plugin-edx --only-categories=lighthouse-plugin-edx --view
```

### Iterating

To speed up development, you can gather once and iterate by auditing repeatedly.

```sh
# Gather artifacts from the browser
NODE_PATH=.. yarn lighthouse https://example.gov --plugins=lighthouse-plugin-edx --only-categories=lighthouse-plugin-edx --gather-mode

# and then iterate re-running this:
NODE_PATH=.. yarn lighthouse https://example.gov --plugins=lighthouse-plugin-edx --only-categories=lighthouse-plugin-edx --audit-mode --view
```

## To run as a plugin user

1. Install `lighthouse` (v5+) and the plugin `lighthouse-plugin-edx`, likely as `devDependencies`.
   - `npm install -D lighthouse lighthouse-plugin-edx`
1. To run your private lighthouse binary, you have three options
   1. `npx --no-install lighthouse https://example.gov --plugins=lighthouse-plugin-edx --view`
   1. `yarn lighthouse https://example.gov --plugins=lighthouse-plugin-edx --view`
   1. Add an npm script calling `lighthouse` and run that.
