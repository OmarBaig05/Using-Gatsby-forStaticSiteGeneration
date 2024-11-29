module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "A simple site built with Gatsby",
    author: "Omar", // Add metadata like author
  },
  plugins: [
    "gatsby-plugin-react-helmet", // Plugin to add metadata to the <head> element
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`, // Path to the Markdown files
      },
    },
    "gatsby-transformer-remark", // Plugin to transform Markdown into HTML
  ],
};
