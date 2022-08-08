require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `OnMed Gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://onmed-dev-cms.nathanhiemstra.com/graphql",
                useAcf: true,
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
    ],
};
