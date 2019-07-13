/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://tedsczelecki.com",
    title: "Ted Sczelecki - Fullstack developer • problem solver • outdoors enthusiast",
    description: "Programming all things on the web",
    headline: "Nothing is impossible. The only limitation is your imagination",
    siteLanguage: "EN",
    ogLanguage: "EN",
    author: "Ted Sczelecki",
    linkedin: "https://www.linkedin.com/in/ted-sczelecki-930a6127/",
    angellist: "https://angel.co/ted-sczelecki",
    github: "https://github.com/tedsczelecki",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolioImages`,
        path: path.join(__dirname, 'src/portfolio'),
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-80525166-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        cookieDomain: "tedsczelecki.com",
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ]
}
