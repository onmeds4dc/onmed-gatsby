import { Link } from "gatsby";

import React from "react";
import SiteLogo from "./site-logo";
import MenuHeader from "./menu-header";

const Header = () => {
    return (
        <header className="container py-4 d-flex justify-content-between">
            <Link to="/" className="text-light d-flex">
                <SiteLogo />
            </Link>
            <MenuHeader />
        </header>
    );
};

export default Header;
