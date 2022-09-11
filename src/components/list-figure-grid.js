import React from "react";

const ListFigureGrid = (props) => {
    const inlineArrowsClass = props.inlineArrows ? " list-inline-arrows " : "";
    return (
        <ol
            className={`list-figure-grid list-unstyled text-dark row mb-0 gx-md-6 ${inlineArrowsClass}`}
        >
            {props.children}
        </ol>
    );
};

export default ListFigureGrid;
