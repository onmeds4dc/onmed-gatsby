import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHexAndDotsBg(props) {
    return (
        <div>
            <StaticImage
                src="../../../static/images/backgrounds/hex-and-dots.webp"
                alt={props.alt}
                className={`img-fluid ${props.className}`}
                backgroundColor="transparent"
            />
            <a href="#" className="hex-and-dots--video">
                <span className="hex-and-dots--video-inner">
                    <span className="icon-play"></span>
                </span>
            </a>
        </div>
    );
}
