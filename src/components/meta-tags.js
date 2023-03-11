import React from "react";
import { RemoveTags } from "../utilities/remove-tags";

const MetaTags = (props, { children }) => {

    const description = RemoveTags(props.description);
    const title = RemoveTags(props.title);

    return (
        <>
            <meta
                name="description"
                content={description || "OnMed is an innovative Care Delivery company that offers Primary Care Services through an innovative Virtual Care Platform that connects patients to clinicians in real-time for a real-life patient experience virtually anywhere."}
            />
            <meta property="og:url" content="https://www.onmed.com" />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content={title || "OnMed Station - Instant Med Solutions Clinician Access"}
            />
            <meta
                property="og:description"
                content={description || "OnMed Stations are medical kiosk with patented technologies for accessibility with clinicians. Can operate 24/7. Real time video consults & remote dispensed Rx."}
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
                content={title || "OnMed Station - Instant Med Solutions Clinician Access"}
            />
            <meta
                name="twitter:description"
                content={description || "OnMed Stations are medical kiosk with patented technologies for accessibility with clinicians. Can operate 24/7. Real time video consults & remote dispensed Rx."}
            />
            <meta
                name="twitter:image"
                content="https://www.onmed.com/images/onmed/social_image.jpg"
            />
            {children}
        </>
    )
};

export default MetaTags;
