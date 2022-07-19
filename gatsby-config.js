module.exports = {
  siteMetadata: {
    title: `OnMed Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://onmed-dev-cms.nathanhiemstra.com/graphql"
    }
  }, "gatsby-plugin-sass"]
};