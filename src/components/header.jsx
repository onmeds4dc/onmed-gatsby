import { Link } from "gatsby";

import React from "react";
import SiteLogo from "./site-logo";

const Header = ({ data }) => {
    console.log("data: ", data);

    // const {
    //     wpMediaItem: { altText },
    // } = data;
    return (
        <header className="container bg-primary p-4">
            <SiteLogo />
            <h1 style={{ margin: 0 }}>
                <Link to="/" className="text-light">
                    {siteTitle}
                </Link>
            </h1>
        </header>
    );
};

const logo = "SS";
const siteTitle = "On Med";

const pageQuery = graphql`
    query {
        wpMediaItem(title: { eq: "Site Logo" }) {
            altText
            sourceUrl
        }
    }
`;

console.log("pageQuery: ", pageQuery.wpMediaItem);

export default Header;
