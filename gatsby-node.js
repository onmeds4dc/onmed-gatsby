exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allWpPages: allWpPage(
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
            homePages: allWpPage(
                filter: { template: { templateName: { eq: "Home Template" } } }
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

    const { allWpPages, homePages } = result.data;

    allWpPages.nodes.map((page) => {
        console.log("page all: ", page);
        const { id, uri } = page;
        return actions.createPage({
            path: uri,
            component: require.resolve("./src/templates/default-template.js"),
            context: {
                id: id,
            },
        });
    });

    homePages.nodes.map((page) => {
        console.log("page: ", page);
        const { id, uri } = page;
        return actions.createPage({
            path: uri,
            component: require.resolve("./src/templates/home-template.js"),
            context: {
                id: id,
            },
        });
    });
};
