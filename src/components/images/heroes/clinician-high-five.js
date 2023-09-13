import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroClinicianHighFive(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/clinician-high-five.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
