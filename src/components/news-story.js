import React from "react";

const NewsStory = (props) => {

    return (
        <section className="container py-4 py-md-6 news-story">
            <div className="row gx-md-6 justify-content-center">
                <div className="col-md-10 col-lg-9">
                    {props.date} {props.category}
                    {
                        props.headline
                            ? <h1 class="h2 text-primary mt-4 mb-6">
                                {props.headline}
                            </h1>
                            : ""
                    }
                    {
                        props.lead
                            ? <div className="news-story--lead lead text-dark mt-6 mb-4" style={{ fontWeight: "600" }}>
                                {props.lead}
                            </div>
                            : ""
                    }
                    <div className="news-story--body" dangerouslySetInnerHTML={{ __html: props.body }}></div>
                </div>
            </div>
        </section>
    );
};

export default NewsStory;


