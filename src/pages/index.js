import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import "../sass/index.scss";

// data

// markup
const IndexPage = ({ data }) => {
    console.log("data: ", data);

    const {
        wpPage: { title, content },
    } = data;

    console.log("title: " + title);

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        wpPage(isFrontPage: { eq: true }) {
            slug
            title
            content
        }
    }
`;
