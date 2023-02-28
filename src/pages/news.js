import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import { ImgHeroGrabbingPillBottles } from "../components/images/heroes/grabbing-pill-bottles";
import { ImgNewsTuskegee } from "../components/images/news/tuskegee";
import { ImgNewsTuskegeeVideo } from "../components/images/news/tuskegee-video";
import { ImgNewsPurchasingSolutionsAlliance } from "../components/images/news/purchasing-solutions-alliance";
import { ImgNewsAuburnTigers } from "../components/images/news/auburn-tigers";

const NewsItem = (props) => {

    console.log('props!: ', props);
    const {
        id: _id,
        title: _title,
        content: _content,
        excerpt: _excerpt,
        date: _date,
        slug: _slug,
        featuredImage: _img,
        postAcf: _postAcf
    } = props.post.node;



    // const category = props.category
    //     ? `<p className="text-uppercase mb-0">${props.category}</p>`
    //     : "";
    const title = _title ? _title : "Title";
    const exerpt = _excerpt
        ? _excerpt
        : "Content coming soon.";

    // const author = props.author ? props.author : "";
    const date = _date ? _date : "";

    const linkIsExternal = _postAcf && _postAcf.linkexternal == "true" && _postAcf.linkexternalurl && _postAcf.linkexternalurl.startsWith("http") ? true : false;
    const slugPrefix = linkIsExternal ? "" : "/news/";
    const slugTarget = linkIsExternal ? "_blank" : "_self";
    const slug = linkIsExternal ? _postAcf.linkexternalurl : _slug;
    const img = _img ? <GatsbyImage image={getImage(_img.node.localFile)} className="mb-4" alt={_img.node.altText} /> : "";


    return (
        <div className="col-md-6 my-5 my-md-6 position-relative">
            {img}
            <h5 className="mt-2">
                <Link
                    to={`${slugPrefix}${slug}`}
                    className="text-dark link-no-underline stretched-link"
                    target={slugTarget}
                    rel="noopener noreferrer"
                >
                    {title}
                </Link>
            </h5>

            <div dangerouslySetInnerHTML={{ __html: exerpt }} />
            <div className="row mt-4">
                {/* <div className="col">{author}</div> */}
                <div className="col-auto text-end">{date}</div>
            </div>
        </div>
    );
};

const NewsPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={<ImgHeroGrabbingPillBottles alt="News" position="60% 50%" />}
        >
            News
        </Hero>
    );

    const sectionOnMedNews = (
        <section className="container py-4 py-md-6">
            <h1 className="text-center text-primary mb-6">OnMed News</h1>
            <div className="row gx-md-6">
                {
                    data.allWpPost.edges.map(post => {
                        const {
                            node: {
                                id,
                                title,
                                content,
                                date,
                                slug,
                                featuredImage },
                        } = post;

                        return (
                            <NewsItem post={post} />
                        )
                    })
                }
                {/* <NewsItem
                    title="WSFA 12 Covers the Rollout of the OnMed Care Station at Tuskegee University"
                    body="WSFA 12 News interviews OnMed CEO Tom Vanderheyden about the OnMed Virtual Care Clinic on Tuskegee University's campus."
                    date="November 2, 2022"
                    img={<GatsbyImage image={getImage(post.node.featuredImage.node.localFile)} alt="" />}
                    slug="https://www.wsfa.com/video/2022/11/02/hometown-tour-new-onmed-virtual-care-clinic-tuskegee-campus/"
                /> */}


                {/* <NewsItem
                    title="WSFA 12 Covers the Rollout of the OnMed Care Station at Tuskegee University"
                    body="WSFA 12 News interviews OnMed CEO Tom Vanderheyden about the OnMed Virtual Care Clinic on Tuskegee University's campus..."
                    date="November 2, 2022"
                    img={<ImgNewsTuskegeeVideo className="mb-4" />}
                    slug="https://www.wsfa.com/video/2022/11/02/hometown-tour-new-onmed-virtual-care-clinic-tuskegee-campus/"
                />
                <NewsItem
                    title="Tuskegee University and OnMed Announce Partnership to Deliver Innovative Virtual Care Clinic and Services"
                    body="Tuskegee University, a preeminent Historical Black College and University (HBCU), has partnered with Virtual Health..."
                    date="September 9, 2022"
                    img={<ImgNewsTuskegee className="mb-4" />}
                    slug="tuskegee-university"
                />
                <NewsItem
                    title="Purchasing Solutions Alliance awards Virtual Health Clinics contract to OnMed"
                    body="OnMed has been selected to provide Virtual Health Clinics and Services to PSA Public Agency members..."
                    img={
                        <ImgNewsPurchasingSolutionsAlliance className="mb-4" />
                    }
                    slug="purchasing-solutions-alliance"
                />
                <NewsItem
                    title="OnMed will Partner with Auburn University for Rural Health Project"
                    body="OnMed will partner with Auburn University, along with the city of LaFayette and the Chambers County Commission to offer a wide variety of health and wellness services to the community..."
                    img={<ImgNewsAuburnTigers className="mb-4" />}
                    slug="auburn-university"
                /> */}
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

export const pageQuery = graphql`
    query {
        allWpPost(sort: {order: DESC, fields: date}, filter: {status: {eq: "publish"}}) {
            edges {
                node {
                    title
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    content
                    id
                    postAcf {
                        herobg
                        linkexternal
                        linkexternalurl
                      }
                    featuredImage {
                        node {
                          altText
                          localFile {
                            childImageSharp {
                              gatsbyImageData(
                                  placeholder: DOMINANT_COLOR, 
                                  formats: [AUTO, WEBP, AVIF],
                              )
                            }
                          }
                        }
                      }
                }
            }
        }
    } 
`;

