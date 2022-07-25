import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { flatListToHierarchical } from "../utilities/menus";

export default () => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "header-menu" }) {
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
        <>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/">
                            {menuHierarchical.map((menuItem, i) => (
                                <>
                                    <Nav.Link
                                        key={`menu-${i}`}
                                        href={menuItem.url}
                                    >
                                        {menuItem.label}
                                    </Nav.Link>
                                    {/* Are there any child menu items? */}
                                    {menuItem.children.length ? (
                                        <NavDropdown id={`dropdown-menu-${i}`}>
                                            {menuItem.children.map(
                                                (menuItemChild, x) => (
                                                    <NavDropdown.Item
                                                        href="#action/3.1"
                                                        key={`menu-${x}`}
                                                    >
                                                        {menuItemChild.label}
                                                    </NavDropdown.Item>
                                                )
                                            )}
                                        </NavDropdown>
                                    ) : null}
                                </>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    ) : null;
};
