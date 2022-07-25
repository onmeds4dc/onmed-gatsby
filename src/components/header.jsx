import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
    <header className="container bg-primary p-4">
        <h1 style={{ margin: 0 }}>
            <Link to="/" className="text-light">
                {siteTitle}
            </Link>
        </h1>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: `OnMed`,
};

export default Header;
