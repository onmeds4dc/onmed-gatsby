import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHexAndDotsBg(props) {
    return (
        <StaticImage
            src="../../../static/images/backgrounds/hex-and-dots.webp"
            alt={props.alt}
            className={`img-fluid ${props.className}`}
            backgroundColor="transparent"
        />
    );
}
