import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";

import Layout from "../components/layout";
import "../sass/index.scss";

import imgComprehensive from "../../static/images/backgrounds/hex-lady-scrubs.jpg";
import imgValues from "../../static/images/backgrounds/hex-three-people-from-above.jpg";

const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome, introBody },
    } = data;

    //     const image = getImage(featuredImage.node.localFile);
    // <GatsbyImage image={image} alt="" />

    console.log("introHeadline: ", pageHome.introHeadline);

    console.log("pageHome: ", pageHome);

    const listItem = (
        <li>
            <h3 className="text-primary">Value prop</h3>
            <p>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
            </p>
        </li>
    );

    const listItem1 =
        "<h4>Step 1</h4> " +
        loremIpsum({
            avgWordsPerSentence: 5,
            avgSentencesPerParagraph: 1,
        });

    const sectionIntro = (
        <section className="bg-home-intro text-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 col-lg-6">
                        <h1 style={{ marginTop: "5vw" }}>
                            {pageHome.introHeadline}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );

    const sectionComprehensive = (
        <section className="container">
            <div className="row justify-content-between">
                <div className="col-md-5 py-4 py-md-6">
                    <h2 className="text-primary">
                        The most comprehensive lorem ipsum dolor sit amet
                    </h2>
                    <LoremIpsum />
                    <p>
                        <Link to="/" className="btn btn-secondary">
                            Request a Location
                        </Link>
                    </p>
                </div>
                <div className="col-md-7">
                    <img src={imgComprehensive} alt="" className="img-fluid" />
                </div>
            </div>
        </section>
    );

    const sectionValues = (
        <section className="container mt-n3">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-4">
                    <img src={imgValues} alt="" className="img-fluid" />
                </div>

                <div className="col-md-7 py-4 py-md-6">
                    <ul className="list-unstyled">
                        {listItem}
                        {listItem}
                        {listItem}
                    </ul>
                </div>
            </div>
        </section>
    );

    const sectionHowItWorks = (
        <section className="bg-sage-light py-4 py-md-6 text-center">
            <div className="container">
                <h2>How it Works</h2>
                <ol className="list-unstyled row">
                    <li className="col-md">
                        <h4>Step 1</h4>
                        <LoremIpsum
                            avgWordsPerSentence="8"
                            avgSentencesPerParagraph={1}
                        />
                    </li>
                    <li className="col-md">
                        <h4>Step 2</h4>
                        <LoremIpsum
                            avgWordsPerSentence="8"
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum={false}
                        />
                    </li>
                    <li className="col-md">
                        <h4>Step 3</h4>
                        <LoremIpsum
                            avgWordsPerSentence="12"
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum={false}
                        />
                    </li>
                    <li className="col-md">
                        <h4>Step 4</h4>
                        <LoremIpsum
                            avgWordsPerSentence="10"
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum={false}
                        />
                    </li>
                    <li className="col-md">
                        <h4>Step 5</h4>
                        <LoremIpsum
                            avgWordsPerSentence="9"
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum={false}
                        />
                    </li>
                </ol>
            </div>
        </section>
    );
    // const sectionHowItWorks = ();
    // const sectionAudiences = ();
    // const sectionTestimonials = ();

    return (
        <Layout>
            {sectionIntro}
            {sectionComprehensive}
            {sectionValues}
            {sectionHowItWorks}
            {/*
            {sectionAudiences}
            {sectionTestimonials}
             */}

            {/* <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        wpPage(isFrontPage: { eq: true }) {
            slug
            title
            pageHome {
                introBody
                introHeadline
            }
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    }
`;
