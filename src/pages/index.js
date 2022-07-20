import * as React from "react";
import { graphql } from "gatsby";
import Button from "react-bootstrap/Button";
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
        <main className="container">
            <title>{title}</title>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <Button>Button</Button>
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
