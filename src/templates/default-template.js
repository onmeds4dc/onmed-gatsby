import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";

const DefaultTemplate = ({ data: { wpPage } }) => {

    const { title, content } = wpPage;

    const sectionHero = (
        <Hero heroSecondary={true}>
            OnMed will Partner with Auburn University for Rural Health Project
        </Hero>
    );

    return (
        <Layout>
            {sectionHero}
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            content
        }
    }
`;

export default DefaultTemplate;
