import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, data }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
