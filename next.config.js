const { remarkCodeHike } = require("@code-hike/mdx")

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: "poimandres" }]],
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
})

module.exports = withNextra()