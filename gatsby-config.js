module.exports = {
  siteMetadata: {
    title: "ZZung's Blog",
    description: "this is jungwon's blog",
  },
  plugins: [
    "gatsby-plugin-image",
		"gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
