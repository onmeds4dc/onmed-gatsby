import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { flatListToHierarchical } from "../utilities/menus";

const MenuFooter = () => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "footer-menu" }) {
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
    `);

    const menuHierarchical = flatListToHierarchical(wpMenu.menuItems.nodes);

    return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
        <Navbar expand="md">
            <Nav className="me-auto" defaultActiveKey="/">
                {menuHierarchical.map((menuItem, i) => (
                    <>
                        <Nav.Link key={`menu-${i}`} href={menuItem.url}>
                            {menuItem.label}
                        </Nav.Link>
                    </>
                ))}
            </Nav>
        </Navbar>
    ) : null;
};

export default MenuFooter;
