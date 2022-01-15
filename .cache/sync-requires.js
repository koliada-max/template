
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/nastya/Desktop/template/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/nastya/Desktop/template/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/nastya/Desktop/template/src/pages/index.js")),
  "component---src-pages-product-card-js": preferDefault(require("/Users/nastya/Desktop/template/src/pages/product-card.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/nastya/Desktop/template/src/pages/using-typescript.tsx"))
}

