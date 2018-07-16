// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/erik/Documents/Sites/clinger-pro/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-about-js": preferDefault(require("/Users/erik/Documents/Sites/clinger-pro/src/templates/about.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/erik/Documents/Sites/clinger-pro/src/templates/blog.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/erik/Documents/Sites/clinger-pro/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/erik/Documents/Sites/clinger-pro/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/erik/Documents/Sites/clinger-pro/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/layout-index.json"),
  "about.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/about.json"),
  "welcome.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/welcome.json"),
  "examples-about.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/examples-about.json"),
  "examples-blog.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/examples-blog.json"),
  "dev-404-page.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/404.json"),
  "index.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/index.json"),
  "404-html.json": require("/Users/erik/Documents/Sites/clinger-pro/.cache/json/404-html.json")
}