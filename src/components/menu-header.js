import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { flatListToHierarchical } from "../utilities/menus";

const MenuHeader = () => {
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
        <Navbar expand="md">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" defaultActiveKey="/">
                        {menuHierarchical.map((menuItem, i) => (
                            <>
                                <Nav.Link
                                    key={`menu-${i}`}
                                    href={menuItem.path}
                                >
                                    {menuItem.label}
                                </Nav.Link>
                                {/* Are there any child menu items? */}
                                {menuItem.children.length ? (
                                    <NavDropdown id={`dropdown-menu-${i}`}>
                                        {menuItem.children.map(
                                            (menuItemChild, x) => (
                                                <NavDropdown.Item
                                                    href={menuItemChild.path}
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
    ) : null;
};

export default MenuHeader;
