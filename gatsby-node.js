exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allWpPage: allWpPage(
                filter: { template: { templateName: { eq: "Default" } } }
            ) {
                nodes {
                    id
                    uri
                    template {
                        templateName
                    }
                }
            }
            contactPage: allWpPage(
                filter: {
                    template: { templateName: { eq: "Contact Template" } }
                }
            ) {
                nodes {
                    id
                    uri
                    template {
                        templateName
                    }
                }
            }
            keyAudiencePage: allWpPage(
                filter: {
                    template: { templateName: { eq: "Key Audience Template" } }
                }
            ) {
                nodes {
                    id
                    uri
                    template {
                        templateName
                    }
                }
            }
        }
    `);

    const { allWpPage, contactPage, keyAudiencePage } = result.data;

    allWpPage.nodes.map((page) => {
        // console.log("page all: ", page);
        const { id, uri } = page;
        return actions.createPage({
            path: uri,
            component: require.resolve("./src/templates/default-template.js"),
            context: {
                id: id,
            },
        });
    });

    contactPage.nodes.map((page) => {
        // console.log("page: ", page);
        const { id, uri } = page;
        return actions.createPage({
            path: uri,
            component: require.resolve("./src/templates/contact-template.js"),
            context: {
                id: id,
            },
        });
    });

    keyAudiencePage.nodes.map((page) => {
        // console.log("page: ", page);
        const { id, uri } = page;
        return actions.createPage({
            path: uri,
            component: require.resolve(
                "./src/templates/key-audience-template.js"
            ),
            context: {
                id: id,
            },
        });
    });
};
