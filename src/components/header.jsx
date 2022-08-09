import { Link } from "gatsby";

import React from "react";
import SiteLogo from "./site-logo";
import MenuHeader from "./menu-header";

const Header = () => {
    return (
        <header className="bg-cloud py-4">
            <div className="container  d-flex justify-content-between">
                <Link to="/" className="text-light d-flex">
                    <SiteLogo />
                </Link>
                <MenuHeader />
            </div>
        </header>
    );
};

export default Header;
