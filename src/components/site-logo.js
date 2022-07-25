import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "react-bootstrap/Image";

export default () => {
    const { wpMediaItem } = useStaticQuery(graphql`
        {
            wpMediaItem(title: { eq: "Site Logo" }) {
                altText
                sourceUrl
            }
        }
    `);

    const logo = wpMediaItem;

    return (
        <Image
            src={logo.sourceUrl}
            alt={logo.altText}
            fluid={true}
            style={{ maxHeight: "50px" }}
        />
    );
};
