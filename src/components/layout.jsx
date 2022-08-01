import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../sass/index.scss";

const Layout = ({ children, data }) => (
    <>
        <Header />
        <main className="container">{children}</main>
        <Footer />
    </>
);

export default Layout;
