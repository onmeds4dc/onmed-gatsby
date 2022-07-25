import * as React from "react";
import { graphql } from "gatsby";
// import Button from "react-bootstrap/Button";
import { Row, Col, Container, ListGroup } from "react-bootstrap";

import Layout from "./layout";

import { Link } from "gatsby";
import PropTypes from "prop-types";

const NavMain = ({ data }) => {
    console.log("data: ", data);
    /*
    // const {
    //     wpPage: { title, content },
    // } = data;

    // console.log("title: " + title);
*/
    return (
        <div>
            Nav
            {/* <h1>{title}</h1> */}
            {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        </div>
    );
};

export default NavMain;

export const pageQuery = graphql`
    query {
        wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
            id
            name
            menuItems {
                nodes {
                    id
                    label
                    title
                    path
                    parentId
                }
            }
        }
    }
`;

console.log("pageQuery: ", pageQuery);
