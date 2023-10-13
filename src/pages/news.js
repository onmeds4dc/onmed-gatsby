import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImgHeroGrabbingPillBottles } from "../components/images/heroes/grabbing-pill-bottles";

const NewsItem = (props) => {
    const {
        title: _title,
        excerpt: _excerpt,
        date: _date,
        slug: _slug,
        featuredImage: _img,
        postAcf: _postAcf
    } = props.post.node;

    const linkIsExternal = _postAcf && _postAcf.linkexternal === "true" && _postAcf.linkexternalurl && _postAcf.linkexternalurl.startsWith("http") ? true : false;
    const title = _title ? _title : "Title";
    const exerpt = _excerpt
        ? _excerpt
        : "Content coming soon.";
    const date = _date ? _date : "";

    const slugPrefix = linkIsExternal ? "" : "/news/";
    const slugTarget = linkIsExternal ? "_blank" : "_self";
    const slug = linkIsExternal ? _postAcf.linkexternalurl : _slug;
    const img = _img
        ? <GatsbyImage image={getImage(_img.node.localFile)} width={100} aspectRatio={104 / 55} className="mb-4" alt={_img.node.altText} />
        : "";

    // const author = props.author ? props.author : "";
    // const category = props.category
    //     ? `<p className="text-uppercase mb-0">${props.category}</p>`
    //     : "";

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
                        return (
                            <NewsItem post={post} />
                        )
                    })
                }
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


export const Head = () => {
    const title = "News about OnMed";
    return (
        <>
            <title>{title}</title>
            <MetaTags title={title} description="News stories about OnMed's medical kiosk stations." ></MetaTags>
        </>
    )
};




export const pageQuery = graphql`
    query {
        allWpPost(limit: 4, sort: {order: DESC, fields: date}, filter: {status: {eq: "publish"}}) {
            edges {
                node {
                    title
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    postAcf {
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
                                        height: 546,
                                        width: 1216
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

