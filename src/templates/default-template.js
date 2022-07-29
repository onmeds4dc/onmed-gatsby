import React from "react";
import { graphql } from "gatsby";

// 2.
const DefaultTemplate = ({ data: { wpPage } }) => {
    const { title, content } = wpPage;

    // 3.
    return (
        <section>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
    );
};

// 1.
export const query = graphql`
    query ($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            content
        }
    }
`;

export default DefaultTemplate;
