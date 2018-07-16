// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-about-js": require("gatsby-module-loader?name=component---src-templates-about-js!/Users/erik/Documents/Sites/clinger-pro/src/templates/about.js"),
  "component---src-templates-blog-js": require("gatsby-module-loader?name=component---src-templates-blog-js!/Users/erik/Documents/Sites/clinger-pro/src/templates/blog.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/erik/Documents/Sites/clinger-pro/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/erik/Documents/Sites/clinger-pro/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/erik/Documents/Sites/clinger-pro/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/erik/Documents/Sites/clinger-pro/.cache/json/layout-index.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/erik/Documents/Sites/clinger-pro/.cache/json/about.json"),
  "welcome.json": require("gatsby-module-loader?name=path---welcome!/Users/erik/Documents/Sites/clinger-pro/.cache/json/welcome.json"),
  "examples-about.json": require("gatsby-module-loader?name=path---examples-about!/Users/erik/Documents/Sites/clinger-pro/.cache/json/examples-about.json"),
  "examples-blog.json": require("gatsby-module-loader?name=path---examples-blog!/Users/erik/Documents/Sites/clinger-pro/.cache/json/examples-blog.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/erik/Documents/Sites/clinger-pro/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/erik/Documents/Sites/clinger-pro/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/erik/Documents/Sites/clinger-pro/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/erik/Documents/Sites/clinger-pro/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/erik/Documents/Sites/clinger-pro/.cache/layouts/index.js")
}