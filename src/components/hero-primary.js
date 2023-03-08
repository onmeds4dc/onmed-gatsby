import React from "react";

const HeroPrimary = (props) => {
    const imgXPosition = props.imgXPosition ? props.imgXPosition : "50%";
    const imgYPosition = props.imgYPosition ? props.imgYPosition : "50%";
    const heroClass = props.heroSecondary ? " hero--secondary " : "";
    const headline = props.heroSecondary ? <h1 className="text-white mb-0">{props.title}</h1> : "";
    return (
        <section
            className={`hero ${heroClass} d-flex justify-contents-center align-items-center text-center ${props.classNames} `}
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundPosition: `${imgXPosition} ${imgYPosition}`,
            }}
        >
            <div className="container" dangerouslySetInnerHTML={{ __html: headline }}></div>
        </section>
    );
};

export default HeroPrimary;
