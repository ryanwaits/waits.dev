const { remarkCodeHike } = require("@code-hike/mdx")
const theme = require('./lib/theme.json');

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
})

module.exports = withNextra()