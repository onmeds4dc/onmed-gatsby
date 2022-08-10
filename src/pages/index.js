import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";

import Layout from "../components/layout";
// import "../sass/index.scss";

import imgComprehensive from "../../static/images/backgrounds/hex-lady-scrubs.jpg";
import imgValues from "../../static/images/backgrounds/hex-three-people-from-above.jpg";
import imgFriendsCoffeeShop from "../../static/images/fpo/friends-coffee-shop-v2.jpg";

const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome, introBody },
    } = data;

    //     const image = getImage(featuredImage.node.localFile);
    // <GatsbyImage image={image} alt="" />

    console.log("introHeadline: ", pageHome.introHeadline);

    console.log("pageHome: ", pageHome);

    const sectionIntro = (
        <section className="bg-cloud  text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-7 col-lg-6">
                        <h1
                            style={{ marginTop: "5vw" }}
                            className="text-primary"
                        >
                            {pageHome.introHeadline}
                        </h1>
                        <img
                            src={imgFriendsCoffeeShop}
                            alt=""
                            className="img-fluid mask-image--hex"
                        />

                        {/* <div
                            dangerouslySetInnerHTML={{
                                __html: pageHome.introBody,
                            }}
                        ></div> */}
                    </div>
                </div>
            </div>
        </section>
    );

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

    const sectionComprehensive = (
        <section className=" bg-primary" style={{ paddingTop: "200px" }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-5 py-4 py-md-6 text-white">
                        <h2>
                            The most comprehensive lorem ipsum dolor sit amet
                        </h2>
                        <LoremIpsum
                            avgSentencesPerParagraph="1"
                            avgWordsPerSentence="40"
                        />
                        <p>
                            <Link to="/" className="btn btn-secondary">
                                Request a Location
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <ul
                            className="list-unstyled bg-white"
                            style={{ marginTop: "200px" }}
                        >
                            {listItem}
                            {listItem}
                            {listItem}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

    const sectionHowItWorks = (
        <section className="bg-secondary py-4 py-md-6 text-center">
            <div className="container">
                <h2 className="text-white">How it Works</h2>
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
