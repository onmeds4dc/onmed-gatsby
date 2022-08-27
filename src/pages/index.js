import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";
import Layout from "../components/layout";
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
        <section className="bg-cloud ">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6">
                        <h1
                            style={{ marginTop: "5vw" }}
                            className="text-primary mb-5"
                        >
                            {pageHome.introHeadline}
                        </h1>

                        <div
                            className="lead"
                            dangerouslySetInnerHTML={{
                                __html: pageHome.introBody,
                            }}
                        ></div>
                    </div>
                    <div className="col-sm-6">
                        <img
                            src={imgFriendsCoffeeShop}
                            alt=""
                            className="img-fluid mask-image--hex"
                        />
                    </div>
                </div>
            </div>
        </section>
    );

    const listItem = (
        <li>
            <h3 className="text-primary">Value props</h3>
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

    const sectionConnections = (
        <section className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6">
                    <img
                        src={imgFriendsCoffeeShop}
                        alt=""
                        className="img-fluid mask-image--hex"
                    />
                </div>

                <div className="col-sm-6">
                    <h2>
                        We create real connections between patients and
                        clinicians, virtually anywhere
                    </h2>
                    <p class="lead">
                        The OnMed Station provides a more personalized virtual
                        care experience and connects patients directly with live
                        certified clinicians whenever they need it. Our care
                        station is open 24/7, with no appointment needed. Every
                        examination is one-on-one in real-time, and we can
                        address 85% of a typical Primary Care visit, including
                        all key biometrics and vitals.
                    </p>
                    <p>
                        <Link to="/" className="btn btn-primary">
                            Request a Location
                        </Link>
                        {""}
                        <Link to="/" className="btn btn-outline-primary ms-2">
                            Watch the video
                        </Link>
                    </p>
                </div>
                <div className="row justify-content-between">
                    <div className="col-sm-4 offset-sm-3">
                        <img
                            src={imgFriendsCoffeeShop}
                            alt=""
                            className="img-fluid mask-image--hex"
                        />
                    </div>

                    <div className="col-sm-5">
                        <ul>
                            <li>
                                <h5>Visit us anytime</h5>
                                <p>
                                    The OnMed® care station is a simple and
                                    convenient healthcare option everyone can
                                    use, anywhere 24/7 - including rural areas
                                    and remote locations. No appointment needed.
                                </p>
                            </li>
                            <li>
                                <h5>Virtual doctor’s office</h5>
                                <p>
                                    Get the most personal care outside of a
                                    doctor’s office. Talk to a certified
                                    clinician live, and receive 85% of typical
                                    primary care services, including vitals
                                    taken with medical grade diagnostics.
                                </p>
                            </li>
                            <li>
                                <h5>Meds in Minutes</h5>
                                <p>
                                    Our on-Site dispensary delivers most
                                    prescriptions and over-the-counter
                                    medications directly to you, saving time and
                                    eliminating a trip to the pharmacy.
                                </p>
                            </li>
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
    const sectionConversation = (
        <section className="bg-secondary py-4 py-md-6">
            <div className="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Start a Conversation</h2>
                        <LoremIpsum
                            avgWordsPerSentence="3"
                            avgSentencesPerParagraph={1}
                        />
                    </div>
                    <div class="col-md-6">
                        <Form>
                            <div class="row">
                                <div class="col-md-6">
                                    <Form.Group
                                        className="mb-3 form-floating"
                                        controlId="formYourName"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        <Form.Label>Your Name</Form.Label>
                                    </Form.Group>
                                </div>
                                <div class="col-md-6">
                                    <Form.Group
                                        className="mb-3 form-floating"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                        <Form.Label>Email address</Form.Label>
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group
                                className="mb-3 form-floating"
                                controlId="formCompanyName"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Company Name"
                                />
                                <Form.Label>Company Name</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3 form-floating"
                                controlId="formSector"
                            >
                                <Form.Select>
                                    <option>Sector 1</option>
                                    <option>Sector 2</option>
                                    <option>Sector 3</option>
                                </Form.Select>
                                <Form.Label>Sector</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3 form-floating"
                                controlId="formMessage"
                            >
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Message"
                                    style={{ height: "auto" }}
                                />
                                <Form.Label>Message</Form.Label>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
    // const sectionAudiences = ();
    // const sectionTestimonials = ();

    return (
        <Layout>
            {sectionIntro}
            {sectionConnections}
            {sectionHowItWorks}
            {sectionConversation}
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
