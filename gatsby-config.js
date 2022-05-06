module.exports = {
  siteMetadata: {
    title: `The POS People, Your Point Of Sale Specialists.`,
    description: `We supply and support Tevalis, Ramsys and IdealPOS Point Of Sale solutions to propel your business into the next level.`,
    author: `@matthewharvey`,
    siteUrl: "https://www.thepospeople.co.nz/",
    data: {
      about: {
        paragraphone: "Hello",
      },
    },
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-169809093-1`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The-POS-People`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/TPPLogo/Logocircle.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
