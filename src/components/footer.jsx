import { Link } from "gatsby";
import React from "react";
import SiteLogoLight from "./site-logo-light";
import MenuFooter from "./menu-footer";
import MenuUtility from "./menu-utility";

const Footer = ({ data }) => {
    return (
        <footer className="bg-primary text-white links-white">
            <div className="container py-4">
                <Link to="/" className="d-flex">
                    <SiteLogoLight />
                </Link>
                <MenuFooter />
                <MenuUtility />
                <div>
                    <Link to="mailto:info@onmed.com">info@onmed.com</Link>
                    <br />
                    (555) 123-4567
                </div>
                <div>
                    <p>Copyright ©2022 OnMed. All Rights Reserved.</p>
                    <p>Terms of Use | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
