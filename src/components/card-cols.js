import React from "react";
import Button from "react-bootstrap/Button";

const CardCols = (props) => {
    const imgPadding = props.imgAlignRight ? "ps-6" : "pe-6";
    const imgCol = (
        <div class="col-md-6">
            <div className={props.imgPadding}>{props.img}</div>
        </div>
    );
    const imgColLeft = props.imgAlignRight ? null : imgCol;
    const imgColRight = props.imgAlignRight ? imgCol : null;
    return (
        <div class="row my-4 my-md-6">
            {imgColLeft}
            <div class="col-md-6">
                <h7 className="text-uppercase text-primary">{props.title}</h7>
                <h3>{props.headline}</h3>
                {props.body}
                <p>{props.cta}</p>
            </div>
            {imgColRight}
        </div>
    );
};

export default CardCols;
