const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-post-layout-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/components/postLayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/about.js"))),
  "component---src-pages-company-team-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/company/team.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/page-2.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/erik/Documents/_Sites/clinger-pro/src/pages/services.js")))
}

