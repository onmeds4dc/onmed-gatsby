import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPTHoltingBottleExit(props) {
    return (
        <StaticImage
            src="../../../static/images/general/pt-holding-bottle-exit.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
