import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
// import { getUrlPath } from "../utils/get-url-path";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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

    const flatListToHierarchical = (
        data = [],
        { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
    ) => {
        const tree = [];
        const childrenOf = {};
        data.forEach((item) => {
            const newItem = { ...item };
            const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
            childrenOf[id] = childrenOf[id] || [];
            newItem[childrenKey] = childrenOf[id];
            parentId
                ? (childrenOf[parentId] = childrenOf[parentId] || []).push(
                      newItem
                  )
                : tree.push(newItem);
        });
        return tree;
    };

    const menuHierarchical = flatListToHierarchical(wpMenu.menuItems.nodes);

    console.log("wpMenu: ", wpMenu);
    console.log("menuHierarchical: ", menuHierarchical);

    return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav> */}

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
                                    ) : (
                                        ""
                                    )}

                                    {/* // <Nav.Link href="#link">Link</Nav.Link>
                                // <NavDropdown
                                //     title="Dropdown"
                                //     id="basic-nav-dropdown"
                                // >
                                //     <NavDropdown.Item href="#action/3.1">
                                //         Action
                                //     </NavDropdown.Item>
                                //     <NavDropdown.Item href="#action/3.2">
                                //         Another action
                                //     </NavDropdown.Item>
                                //     <NavDropdown.Item href="#action/3.3">
                                //         Something
                                //     </NavDropdown.Item>
                                //     <NavDropdown.Divider />
                                //     <NavDropdown.Item href="#action/3.4">
                                //         Separated link
                                //     </NavDropdown.Item>
                                // </NavDropdown> */}
                                </>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    ) : null;
};
