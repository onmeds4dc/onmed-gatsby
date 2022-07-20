import * as React from "react";
import { graphql } from "gatsby";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// data

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
        <main className="container">
            <title>{title}</title>
            <h1>{title}</h1>
            <Button>Button</Button>

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
