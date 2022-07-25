import { Link } from "gatsby";

import React from "react";
import SiteLogo from "./site-logo";
import MainMenu from "./main-menu";

const Header = ({ data }) => {
    return (
        <header className="container py-4 d-flex justify-content-between">
            <Link to="/" className="text-light d-flex">
                <SiteLogo />
            </Link>
            <MainMenu />
        </header>
    );
};

export default Header;
