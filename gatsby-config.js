require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `OnMed - Reconnecting prople to better health`,
        siteUrl: `https://onmed.com`,
    },

    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url:
                    process.env.WPGRAPHQL_URL ||
                    `https://onmed-cms.com/graphql/`,
                useACF: true,
            },
        },
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    formats: [`auto`],
                    placeholder: `dominantColor`,
                    quality: 50,
                    breakpoints: [750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "static/images/favicon/favicon.svg",
            },
        },

        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        `gatsby-transformer-sharp`,
        "gatsby-plugin-image",
        "gatsby-plugin-sass",
        `gatsby-plugin-client-side-redirect`, // keep it in last in list
    ],
};
