import React from "react";
import Button from "react-bootstrap/Button";

const HeroPrimary = (props) => {
    const imgXPosition = props.imgXPosition ? props.imgXPosition : "50%";
    const imgYPosition = props.imgYPosition ? props.imgYPosition : "50%";
    return (
        <section
            className={`hero ${props.classNames} d-flex justify-contents-center align-items-center text-center`}
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundPosition: `${imgXPosition} ${imgYPosition}`,
            }}
        >
            <div className="container">
                <h1 className="text-white mt-5">{props.title}</h1>
            </div>
        </section>
    );
};

export default HeroPrimary;
