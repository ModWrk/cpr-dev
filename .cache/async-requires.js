// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-post-layout-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/components/postLayout.js" /* webpackChunkName: "component---src-components-post-layout-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-company-team-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/company/team.js" /* webpackChunkName: "component---src-pages-company-team-js" */),
  "component---src-pages-index-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/erik/Documents/_Sites/clinger-pro/.cache/data.json")

