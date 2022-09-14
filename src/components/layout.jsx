import React from "react";
import Header from "./header";
import Footer from "./footer";

import {
    trackingFacebookPixel,
    trackingActiveCampaign,
    trackingAccessibility,
    trackingZoom,
    trackingGoogle,
    // connectionsScripts,
} from "./tracking-codes";

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Header pageTitle={pageTitle} />
            <main>{children}</main>
            <Footer />
            <div
                className="tracking-codes"
                dangerouslySetInnerHTML={{
                    __html:
                        trackingFacebookPixel +
                        trackingGoogle +
                        trackingZoom +
                        trackingAccessibility +
                        trackingActiveCampaign,
                }}
            />
        </>
    );
};

export default Layout;
