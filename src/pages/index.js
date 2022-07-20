import * as React from "react";
import { graphql } from "gatsby";

// data
const links = [
    {
        text: "Tutorial",
        url: "https://www.gatsbyjs.com/docs/tutorial/",
        description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
        color: "#E95800",
    },
    {
        text: "How to Guides",
        url: "https://www.gatsbyjs.com/docs/how-to/",
        description:
            "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
        color: "#1099A8",
    },
    {
        text: "Reference Guides",
        url: "https://www.gatsbyjs.com/docs/reference/",
        description:
            "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
        color: "#BC027F",
    },
    {
        text: "Conceptual Guides",
        url: "https://www.gatsbyjs.com/docs/conceptual/",
        description:
            "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
        color: "#0D96F2",
    },
    {
        text: "Plugin Library",
        url: "https://www.gatsbyjs.com/plugins",
        description:
            "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
        color: "#8EB814",
    },
    {
        text: "Build and Host",
        url: "https://www.gatsbyjs.com/cloud",
        badge: true,
        description:
            "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
        color: "#663399",
    },
];

// markup
const IndexPage = ({ data }) => {
    console.log("data: ", data);
    // const {
    //     wpPost: { title },
    // } = data;

    console.log("data.wpPage.title: " + data.wpPage.title);

    const {
        wpPage: { title, content },
    } = data;

    console.log("title: " + title);

    return (
        <main>
            <title>{title}</title>
            <h1>{title}</h1>

            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </main>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        wpPage {
            isFrontPage
            slug
            title
            content
        }
    }
`;
