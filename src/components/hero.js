import React from "react";

function Hero(props) {
    const { children, fluid } = props;
    return (
        <div className="hero">
            <div className="hero--bg-img">{props.img}</div>
            <div className="hero--overlay">
                <h1 className="text-white mb-0">{children}</h1>
            </div>
        </div>
    );
}

export default Hero;
