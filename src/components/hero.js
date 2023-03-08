import React from "react";

function Hero(props) {
    const { children } = props;
    let heroClass = props.heroSecondary ? " hero--secondary " : "";

    return (
        <div className={`hero ${heroClass}`}>
            <div>
                {props.img ?
                    <div className="hero--bg-img">{props.img}</div>
                    : ""
                }
                {children ?
                    <div className="hero--overlay">
                        <h1 className="text-white mb-0">{children}</h1>
                    </div>
                    : ""
                }

            </div>
        </div>
    );
}

export default Hero;
