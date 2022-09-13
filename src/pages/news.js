import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import ContactForm from "../components/contact-form";
import CardColsSecondary from "../components/card-cols-secondary";
import imgInnovation from "../../static/images/general/innovation-for-real.jpg";

import imgPortraitTomVanderheyden from "../../static/images/portraits/tom-vanderheyden.jpg";
import imgPortraitRyanBrock from "../../static/images/portraits/ryan-brock.jpg";
import imgPortraitSteveJohnston from "../../static/images/portraits/steve-johnston.jpg";
import imgPortraitPlaceholder from "../../static/images/portraits/placeholder.jpg";
import imgPortraitMikeZeman from "../../static/images/portraits/mike-zeman.jpg";
import imgPortraitPatriciaAgnello from "../../static/images/portraits/patricia-agnello.jpg";
import imgPortraitMarkRoyals from "../../static/images/portraits/mark-royals.jpg";
import imgPortraitLeonardSolio from "../../static/images/portraits/leonard-solio.jpg";
import imgPortraitMalienaLongley from "../../static/images/portraits/maliena-longley.jpg";
import imgPortraitJimSparks from "../../static/images/portraits/jim-sparks.jpg";
import imgPortraitHowardGruverman from "../../static/images/portraits/howard-gruverman.jpg";
import imgPortraitChrisKent from "../../static/images/portraits/chris-kent.jpg";

const NewsItem = (props) => {
    const category = props.category ? props.category : "Category";
    const title = props.title ? props.title : "Title";
    const body = props.body
        ? props.body
        : "Donec sed odio dui. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauri.";
    const author = props.author ? props.author : "Author Name";
    const img = props.img ? props.img : "/images/news/placeholder.jpg";
    const date = props.date ? props.date : "April 17, 2022";

    return (
        <div class="col-md-6 my-5 my-md-6">
            <img src={img} alt={title} className="img-fluid mb-4" />
            <p className="text-uppercase mb-0">{category}</p>

            <h5 className="mt-2">{title}</h5>
            <p>{body}</p>
            <div class="row mt-4">
                <div class="col">{author}</div>
                <div class="col-auto text-end">{date}</div>
            </div>
        </div>
    );
};

const NewsPage = ({ data }) => {
    const sectionHero = (
        <HeroPrimary
            classNames="mb-5 mb-md-6"
            title="News"
            img="/images/heroes/grabbing-pill-bottles.jpg"
            imgXPosition="60%"
        />
    );

    const sectionOnMedNews = (
        <section className="container py-4 py-md-6">
            <h1 className="text-center text-primary mb-6">OnMed News</h1>
            <div className="row gx-md-6">
                <NewsItem
                    title="Tuskegee University and OnMed Announce Partnership to Deliver Innovative Virtual Care Clinic and Services"
                    body="Tuskegee University, a preeminent Historical Black College and University (HBCU), has partnered with Virtual Health com..."
                    img="/images/news/tuskegee.jpg"
                />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionOnMedNews}
        </Layout>
    );
};

export default NewsPage;
