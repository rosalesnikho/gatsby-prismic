module.exports = {
  siteMetadata: {
    title: `Nik R | Full-Stack Software Developer`,
        description: `Portfolio & Blog`,
    author: `www.nikrosales.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'nikrportfolio', // (REQUIRED, replace with your own)
            linkResolver: () => post => `/${post.uid}`,
        }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oscar-icon.png`, // This path is relative to the root of the site.
      },
    },

    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-148958847-1",
            head: true,
        },
    },

      {
          resolve: `gatsby-plugin-google-adsense`,
          options: {
              publisherId: `ca-pub-2063447360053197`
          },
      },

  ],
}
