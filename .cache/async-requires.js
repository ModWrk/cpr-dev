// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-post-layout-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/components/postLayout.js" /* webpackChunkName: "component---src-components-post-layout-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-gallery-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/gallery.js" /* webpackChunkName: "component---src-pages-gallery-js" */),
  "component---src-pages-index-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-services-js": () => import("/Users/erik/Documents/_Sites/clinger-pro/src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/erik/Documents/_Sites/clinger-pro/.cache/data.json")

