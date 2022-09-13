import React from "react";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";

import {
    trackingMeta,
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
            <Helmet>
                <title>OnMed</title>
                <script src="https://code.jquery.com/jquery-latest.min.js"></script>

                <meta property="og:url" content="https://www.onmed.com" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="OnMed Station - Instant Med Solutions Clinician Access"
                />
                <meta
                    property="og:description"
                    content="OnMed Stations are medical kiosk with patented technologies for accessibility with clinicians. Can operate 24/7. Real time video consults & remote dispensed Rx."
                />
                <meta
                    property="og:image"
                    content="https://www.onmed.com/images/onmed/social_image.jpg"
                />
                <meta
                    name="norton-safeweb-site-verification"
                    content="7-uhdsuzv6d5ctd6yzuqix0bp4-9s45-utsapjz9-uvuafhlz6l4nvbzbx2e3-ty3jl6xiomuxmpr2g1jkdu7tjpz5w0pjhfno57oftjfyzqt3p8mfimsgh0qr9fp6sv"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="onmed.com" />
                <meta property="twitter:url" content="https://www.onmed.com" />
                <meta
                    name="twitter:title"
                    content="OnMed Station - Instant Med Solutions Clinician Access"
                />
                <meta
                    name="twitter:description"
                    content="OnMed Stations are medical kiosk with patented technologies for accessibility with clinicians. Can operate 24/7. Real time video consults & remote dispensed Rx."
                />
                <meta
                    name="twitter:image"
                    content="https://www.onmed.com/images/onmed/social_image.jpg"
                />
            </Helmet>
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
