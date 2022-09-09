import React from "react";
import Button from "react-bootstrap/Button";

const CardCols = (props) => {
    const colImgPadding = props.imgAlignRight
        ? "ps-lg-3 ps-xl-6"
        : "pe-lg-3 pe-xl-6";
    const colTextPadding = props.imgAlignRight
        ? "pe-lg-3 pe-xl-6"
        : "ps-lg-3 ps-xl-6";
    const colImgOrderg = props.imgAlignRight ? " order-md-2 " : "";

    return (
        <div class="card-cols--item row my-md-6 py-md-5">
            <div className={"card-cols--img col-md-6 " + colImgOrderg}>
                <div className={colImgPadding}>{props.img}</div>
            </div>
            <div class="card-cols--text col-md-6 ">
                <div className="p-3 p-md-0">
                    <div className={colTextPadding}>
                        <span className="h8 text-uppercase text-primary">
                            {props.title}
                        </span>
                        <h4 className="mt-3">{props.headline}</h4>
                        {props.body}
                        <p className="h7 mt-6 pt-5">{props.cta}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCols;
