import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroAuburnUniversity(props) {
    return (
        <StaticImage
            src="../../../../../static/images/heroes/news/auburn-university.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position || "50% 50%"}
        />
    );
}
