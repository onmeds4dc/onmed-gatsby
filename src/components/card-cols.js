import React from "react";
import Button from "react-bootstrap/Button";

const CardCols = (props) => {
    const colImgPadding = props.imgAlignRight ? "ps-6" : "pe-6";
    const colTextPadding = props.imgAlignRight ? "pe-6" : "ps-6";
    const imgCol = (
        <div className="col-md-6">
            <div className={colImgPadding}>{props.img}</div>
        </div>
    );
    const imgColLeft = props.imgAlignRight ? null : imgCol;
    const imgColRight = props.imgAlignRight ? imgCol : null;
    return (
        <div class="row my-4 my-md-6 py-md-5 gx-5">
            {imgColLeft}
            <div class="col-md-6 pt-md-3">
                <div className={colTextPadding}>
                    <span className="h8 text-uppercase text-primary">
                        {props.title}
                    </span>
                    <h4 className="mt-3">{props.headline}</h4>
                    {props.body}
                    <p className="h7 mt-6 pt-5">{props.cta}</p>
                </div>
            </div>
            {imgColRight}
        </div>
    );
};

export default CardCols;
