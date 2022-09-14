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
        }
    `);

    const { allWpPage, contactPage, keyAudiencePage } = result.data;

    allWpPage.nodes.map((page) => {
        const { id, uri } = page;
        return actions.createPage({
            path: uri,
            component: require.resolve("./src/templates/default-template.js"),
            context: {
                id: id,
            },
        });
    });
};
