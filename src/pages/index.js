import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";
import Layout from "../components/layout";
import imgFriendsCoffeeShop from "../../static/images/fpo/friends-coffee-shop-v2.jpg";
import SvgVideoCamera from "../components/svgs/video-camera";

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
                    <h2 className="text-primary">
                        We create real connections between patients and
                        clinicians, virtually anywhere
                    </h2>
                    <p class="lead">
                        Getting Care at an OnMed station is simple
                    </p>
                    <div>
                        <Link
                            to="/"
                            className="btn btn-primary text-uppercase  mb-3 me-2"
                        >
                            Request a Location
                        </Link>{" "}
                        <Link
                            to="/"
                            className="btn btn-outline-primary text-uppercase mb-3 "
                        >
                            <SvgVideoCamera
                                className="text-primary"
                                style={{ height: "16px" }}
                            />{" "}
                            Watch the video
                        </Link>
                    </div>
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
                                <h5 className="text-uppercase">
                                    Visit us anytime
                                </h5>
                                <p>
                                    The OnMed® care station is a simple and
                                    convenient healthcare option everyone can
                                    use, anywhere 24/7 - including rural areas
                                    and remote locations. No appointment needed.
                                </p>
                            </li>
                            <li>
                                <h5 className="text-uppercase">
                                    Virtual doctor’s office
                                </h5>
                                <p>
                                    Get the most personal care outside of a
                                    doctor’s office. Talk to a certified
                                    clinician live, and receive 85% of typical
                                    primary care services, including vitals
                                    taken with medical grade diagnostics.
                                </p>
                            </li>
                            <li>
                                <h5 className="text-uppercase">
                                    Meds in Minutes
                                </h5>
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
        <section className="bg-cloud py-4 py-md-6 text-center">
            <div className="container">
                <h2>How it Works</h2>
                <p className="lead">
                    Getting Care at an OnMed station is simple
                </p>
                <ol className="list-unstyled row text-dark">
                    <li className="col-md">
                        <h4 className="text-primary">Step 1</h4>
                        <p>
                            Walk right up and enter the OnMed® care station at
                            any time. No appointment necessary.
                        </p>
                    </li>
                    <li className="col-md">
                        <h4 className="text-primary">Step 2</h4>
                        <p>
                            Just press START to connect with a certified
                            clinician on live video in real-time.
                        </p>
                    </li>
                    <li className="col-md">
                        <h4 className="text-primary">Step 3</h4>
                        <p>
                            Have your vitals taken, including blood pressure,
                            pulse, body temperature and respiration rate.
                        </p>
                    </li>
                    <li className="col-md">
                        <h4 className="text-primary">Step 4</h4>
                        <p>
                            Walk out with OTC medicine and most prescriptions
                            filled right on the spot, from our secure
                            dispensary.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    );

    const sectionPatients = (
        <section className="container">
            <div class="row">
                <div class="col-md-6">
                    <div className="pe-6">
                        <img
                            src={imgFriendsCoffeeShop}
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <h7 className="text-uppercase">Patients</h7>
                    <h3>Always open. Always On.</h3>
                    <p>
                        Our OnMed care station is like stepping into a mini
                        doctor’s office. No appointment needed. We can even
                        dispense most of your prescriptions and over-the-counter
                        medications right on the spot, eliminating a trip to the
                        pharmacy.
                    </p>
                    <p>
                        <a href="#" class="btn-arrow">
                            Tell me more
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
    const sectionProviders = (
        <section className="bg-cloud py-4 py-md-6">
            <div className="container">
                <div class="row">
                    <div class="col-md-6">
                        <h7 className="text-uppercase">Providers</h7>
                        <h3>
                            Practice everywhere. See your patients anywhere.
                        </h3>
                        <p>
                            The quality of our care is not just for our
                            customers, because we’ve created a life-sized
                            virtual experience for clinicians to connect in
                            real-time with patients. We also provide medical
                            grade diagnostics so you can give professional care.
                            Our OnMed care stations even allow you to prescribe
                            and dispense most prescriptions and over-the-counter
                            medications immediately through our secure, on-site
                            dispensary.
                        </p>
                        <p>
                            <a href="#" class="btn-arrow">
                                Learne more
                            </a>
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div className="ps-6">
                            <img
                                src={imgFriendsCoffeeShop}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionPartners = (
        <section className="container">
            <div class="row">
                <div class="col-md-6">
                    <div className="pe-6">
                        <img
                            src={imgFriendsCoffeeShop}
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <h7 className="text-uppercase">Partners</h7>
                    <h3>
                        A different kind of doctor's office. A new kind of
                        pharmacy.
                    </h3>
                    <p>
                        We deliver personalized virtual care solutions, so you
                        can offer comprehensive healthcare on-demand. OnMed is
                        easy to install and fully operational in no time, ready
                        to serve company employees, business patrons, or even
                        students on campus. Our care station features a modern
                        design that’s sleek and aesthetically pleasing. It’s
                        also cost effective compared to brick-and-mortar Primary
                        Care, including hospitals and clinics. OnMed is the
                        anywhere healthcare whenever you need it most.
                    </p>
                    <p>
                        <a href="#" class="btn-arrow">
                            Learn more
                        </a>
                    </p>
                </div>
                <div class="row text-end justify-content-end">
                    <div class="col-7">
                        <h4 className="text-primary">Testimonial</h4>
                        <p>
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Maecenas sed diam eget risus varius blandit sit amet
                            non magna. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                        Donec ullamcorper nulla non metus auctor fringilla.
                        Maecenas sed diam eget risus varius blandit sit amet non
                        magna. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                        <p>-Firstname Lastname</p>
                    </div>
                </div>
                <div class="row justify-content-around text-center">
                    <div class="col-md-10">
                        <h1 className="text-primary">Expanding nationwide</h1>
                        <p>
                            We are fully committed to making quality healthcare
                            accessible to all, so we’re always growing and
                            expanding. If you’re interested in learning more
                            about OnMed care stations nearest to you, send us
                            your location request.
                        </p>
                        <p>
                            <Link
                                to="/"
                                className="btn btn-primary text-uppercase"
                            >
                                Request a Location
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionContact = (
        <section className="bg-sage py-4 py-md-6">
            <div className="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>
                            Opening more doors to Healthcare around the world
                        </h2>
                        <p className="text-dark">
                            Please complete this form, and a member of our team
                            will be in touch shortly.
                        </p>
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

    return (
        <Layout>
            {sectionIntro}
            {sectionConnections}
            {sectionHowItWorks}
            {sectionPatients}
            {sectionProviders}
            {sectionPartners}
            {sectionContact}

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
