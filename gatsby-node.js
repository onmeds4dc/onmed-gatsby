const redirects = require("./redirects.json");


exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    redirects.forEach((redirect) =>
        createRedirect({
            fromPath: redirect.fromPath,
            toPath: redirect.toPath,
            statusCode: 301,
        })
    );

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
          
            allWpPost: allWpPost(sort: { fields: [date], order: DESC }) {
                edges {
                    previous {
                        id
                    }
        
                    # note: this is a GraphQL alias. It renames "node" to "post" for this query
                    # We're doing this because this "node" is a post! It makes our code more readable further down the line.
                    post: node {
                        id
                        uri
                    }
        
                    next {
                        id
                    }
                }
            }
              
        }
    `);

    const { allWpPage, allWpPost } = result.data;

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

    allWpPost.edges.map((post) => {
        const { id, uri } = post.post;
        return actions.createPage({
            path: uri,
            component: require.resolve("./src/templates/news-template.js"),
            context: {
                id: id,
            },
        });
    });
};

