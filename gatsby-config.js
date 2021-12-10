const { languages, defaultLanguage } = require('./languages');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: false,
    FAST_DEV: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFEB35`,
        theme_color: `#FFEB35`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`ua`, `ru`, `en`],
        defaultLanguage: `ua`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['ua'],
          },
          {
            matchPath: '/preview',
            languages: ['ua'],
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     exclude: ['/**/404', '/**/404.html'],
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //         allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
    //           edges {
    //             node {
    //               context {
    //                 i18n {
    //                   defaultLanguage
    //                   languages
    //                   originalPath
    //                 }
    //               }
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     serialize: ({ site, allSitePage }) => {
    //       return allSitePage.edges.map((edge) => {
    //         const {
    //           languages,
    //           originalPath,
    //           defaultLanguage,
    //         } = edge.node.context.i18n;
    //         const { siteUrl } = site.siteMetadata;
    //         const url = siteUrl + originalPath;
    //         const links = [
    //           { lang: defaultLanguage, url },
    //           { lang: 'x-default', url },
    //         ];
    //         languages.forEach((lang) => {
    //           if (lang === defaultLanguage) return;
    //           links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
    //         });
    //         return {
    //           url,
    //           changefreq: 'daily',
    //           priority: originalPath === '/' ? 1.0 : 0.7,
    //           links,
    //         };
    //       });
    //     },
    //   },
    // },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: 'http://46.101.194.93:1337',
    //     queryLimit: 1000, // Defaults to 100
    //     singleTypes: [`home-page`, `about`, `contacts`],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
