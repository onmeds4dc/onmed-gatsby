import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";

const Layout = ({ children, data }) => (
    <>
        <Header />

        <main className="container">{children}</main>
    </>
);

export default Layout;

// export const pageQuery = graphql`
//     query {
//         wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
//             id
//             name
//             menuItems {
//                 nodes {
//                     id
//                     label
//                     title
//                     path
//                     parentId
//                 }
//             }
//         }
//     }
// `;

// const Layout = ({ children }) => (
//     <div
//         render={(data) => (
//             <>
//                 <Container fluid className="px-0 main">
//                     <Row noGutters className="justify-content-center">
//                         <Col>
//                             <Header siteTitle={data.site.siteMetadata.title} />
//                         </Col>
//                     </Row>
//                     {/* <Navbar pageInfo={pageInfo} /> */}
//                     <Row noGutters>
//                         <Col>
//                             <Container className="mt-5">
//                                 <main>{children}</main>
//                             </Container>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Container fluid className="px-0">
//                     <Row noGutters>
//                         <Col className="footer-col">
//                             <footer>
//                                 <span>
//                                     © {new Date().getFullYear()}, Built with
//                                     {` `}
//                                     <a href="https://www.gatsbyjs.org">
//                                         Gatsby
//                                     </a>
//                                 </span>
//                             </footer>
//                         </Col>
//                     </Row>
//                 </Container>
//             </>
//         )}
//     />
// );

// export default Layout;
