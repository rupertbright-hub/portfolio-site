module.exports = {
  siteMetadata: {
    title: `Rupert Bright`,
    description: `Portfolio`,
    author: `@rupertbright`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/,
          }
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },    
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Permanent Marker`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`200`, `500`, `700`, `800`,`900`]
    //       },
    //     ],
    //   },
    // }
    
  ],
}
