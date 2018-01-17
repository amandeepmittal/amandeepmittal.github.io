// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/amandeepmittal/github/amandeepmittal.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/amandeepmittal/github/amandeepmittal.github.io/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/amandeepmittal/github/amandeepmittal.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/amandeepmittal/github/amandeepmittal.github.io/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/Users/amandeepmittal/github/amandeepmittal.github.io/.cache/json/offline-plugin-app-shell-fallback.json"),
  "layout-index.json": require("/Users/amandeepmittal/github/amandeepmittal.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/amandeepmittal/github/amandeepmittal.github.io/.cache/json/index.json")
}