import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { VideoShortForm } from "../video-short-form";

export function ImgHexAndDotsBg(props) {
    return (
        <div>
            <StaticImage
                src="../../../static/images/backgrounds/hex-and-dots.webp"
                alt={props.alt}
                className={`img-fluid ${props.className}`}
                backgroundColor="transparent"
            />
            <VideoShortForm className="video-desktop" />
        </div>
    );
}
