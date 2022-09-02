import { Link } from "gatsby";
import React from "react";
import SiteLogoLight from "./site-logo-light";
import MenuFooter from "./menu-footer";
import MenuUtility from "./menu-utility";
import imgSocialFacebook from "../../static/icons/social-media/facebook.svg";
import imgSocialYouTube from "../../static/icons/social-media/youtube.svg";
import imgSocialInstagram from "../../static/icons/social-media/instagram.svg";
import imgSocialLinkedIn from "../../static/icons/social-media/linked-in.svg";
import imgSocialTwitter from "../../static/icons/social-media/twitter.svg";

const Footer = ({ data }) => {
    return (
        <footer className="bg-primary text-white links-white footer">
            <div className="container py-4">
                <div className="footer-groups">
                    <div className="footer--group-info">
                        <Link to="/" className="d-flex">
                            <SiteLogoLight />
                        </Link>

                        <div>
                            <Link to="mailto:info@onmed.com">
                                info@onmed.com
                            </Link>
                            <br />
                            (727) 601-4513
                        </div>
                        <div>
                            <p>Copyright ©2022 OnMed. All Rights Reserved.</p>
                            <p>Terms of Use | Privacy Policy</p>
                        </div>
                    </div>
                    <div className="footer--group-menus d-flex align-items-start">
                        <MenuFooter className="footer--menu" />
                        <MenuUtility className="footer--menu" />
                    </div>
                    <div className="footer--group-social-media">
                        <div className="footer--social-media">
                            <Link
                                to="https://www.facebook.com/OnMedStation/"
                                target="_blank"
                            >
                                <img
                                    src={imgSocialFacebook}
                                    alt="Facebook logo"
                                    className="img-fluid"
                                />
                            </Link>
                            <Link
                                to="https://www.youtube.com/channel/UCbce9cBtkNhV_BthoLdy5nQ"
                                target="_blank"
                            >
                                <img
                                    src={imgSocialYouTube}
                                    alt="YouTube logo"
                                    className="img-fluid"
                                />
                            </Link>
                            <Link
                                to="https://www.instagram.com/onmedstation/"
                                target="_blank"
                            >
                                <img
                                    src={imgSocialInstagram}
                                    alt="Instagram logo"
                                    className="img-fluid"
                                />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/onmedstation/about/"
                                target="_blank"
                            >
                                <img
                                    src={imgSocialLinkedIn}
                                    alt="LinkedIn logo"
                                    className="img-fluid"
                                />
                            </Link>
                            <Link
                                to="https://twitter.com/onmedstation"
                                target="_blank"
                            >
                                <img
                                    src={imgSocialTwitter}
                                    alt="Twitter logo"
                                    className="img-fluid"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
