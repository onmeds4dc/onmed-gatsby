import React from "react";
import Button from "react-bootstrap/Button";

const HexImage = (props) => {
    const classNameCompiled = "mask-image--hex " + props.className;
    return (
        <div
            className={classNameCompiled}
            style={{ backgroundImage: `url(${props.imgSrc})` }}
        >
            <span className="visually-hidden">{props.alt}</span>
        </div>
    );
};

export default HexImage;
