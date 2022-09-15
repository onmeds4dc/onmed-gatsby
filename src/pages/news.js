import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import { Link } from "gatsby";
import MetaTags from "../components/meta-tags";

const NewsItem = (props) => {
    const category = props.category
        ? `<p className="text-uppercase mb-0">${props.category}</p>`
        : "";
    const title = props.title ? props.title : "Title";
    const body = props.body
        ? props.body
        : "Donec sed odio dui. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauri.";
    const author = props.author ? props.author : "";
    const img = props.img ? props.img : "/images/news/placeholder.jpg";
    const date = props.date ? props.date : "";

    return (
        <div className="col-md-6 my-5 my-md-6 position-relative">
            <img src={img} alt={title} className="img-fluid mb-4" />

            {category}

            <h5 className="mt-2">
                <Link
                    to={`/news/${props.slug}`}
                    className="text-dark link-no-underline stretched-link"
                >
                    {title}
                </Link>
            </h5>
            <p>{body}</p>
            <div className="row mt-4">
                <div className="col">{author}</div>
                <div className="col-auto text-end">{date}</div>
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
                    body="Tuskegee University, a preeminent Historical Black College and University (HBCU), has partnered with Virtual Health..."
                    date="September 09, 2022"
                    img="/images/news/tuskegee.jpg"
                    slug="tuskegee-university"
                />
                <NewsItem
                    title="Purchasing Solutions Alliance awards Virtual Health Clinics contract to OnMed"
                    body="OnMed has been selected to provide Virtual Health Clinics and Services to PSA Public Agency members..."
                    img="/images/news/purchasing-solutions-alliance.jpg"
                    slug="purchasing-solutions-alliance"
                />
                <NewsItem
                    title="OnMed will Partner with Auburn University for Rural Health Project"
                    body="OnMed will partner with Auburn University, along with the city of LaFayette and the Chambers County Commission to offer a wide variety of health and wellness services to the community..."
                    img="/images/news/auburn-tigers.jpg"
                    slug="auburn-university"
                />
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

export const Head = () => (
    <>
        <title>News about OnMed</title>
        <MetaTags></MetaTags>
    </>
);
