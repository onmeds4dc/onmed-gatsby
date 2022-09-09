import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";
import Layout from "../components/layout";
import imgFriendsCoffeeShop from "../../static/images/fpo/friends-coffee-shop-v2.jpg";
import SvgVideoCamera from "../components/svgs/video-camera";
import CardCols from "../components/card-cols";
import HexImage from "../components/hex-image";

const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome, introBody },
    } = data;

    //     const image = getImage(featuredImage.node.localFile);
    // <GatsbyImage image={image} alt="" />

    console.log("introHeadline: ", pageHome.introHeadline);

    console.log("pageHome: ", pageHome);

    const sectionIntro = (
        <section
            className="bg-cloud pt-4 py-md-6"
            style={{ overflow: "hidden" }}
        >
            <div className="container">
                <div className="row justify-content-between gx-6">
                    <div className="col-md-7 col-lg-6">
                        <div className="d-flex align-items-center">
                            <div className="me-xl-4">
                                <h1 className="text-primary mb-3">
                                    {pageHome.introHeadline}
                                </h1>

                                <div
                                    className="lead"
                                    dangerouslySetInnerHTML={{
                                        __html: pageHome.introBody,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6 img-hex-into--col bg-half-horz-cloud-white-md">
                        <div className="img-hex-into mt-md-n3">
                            <div className="img-hex-into-2">
                                <HexImage
                                    imgSrc={imgFriendsCoffeeShop}
                                    alt="Alt text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ListItem = (props) => {
        return (
            <li className="col-lg">
                <div className="d-flex d-lg-block list-inline-arrows--items my-3">
                    <div className="flex-fill mx-lg-auto list-inline-arrows--item-1 list-inline-arrows--target">
                        <HexImage
                            imgSrc={imgFriendsCoffeeShop}
                            alt="Alt text"
                        />
                    </div>
                    <div className="flex-fill list-inline-arrows--item-2 mx-3 mt-lg-6">
                        {" "}
                        <h5 className="text-primary mb-3">{props.headline}</h5>
                        {props.body}
                    </div>
                </div>
            </li>
        );
    };

    const listItem1 =
        "<h4>Step 1</h4> " +
        loremIpsum({
            avgWordsPerSentence: 5,
            avgSentencesPerParagraph: 1,
        });

    const sectionConnections = (
        <section className="bg-hex-dark-many">
            <div className="container py-4 py-md-6">
                <div
                    className="row justify-content-between mt-lg-6 pt-lg-6"
                    // style={{ marginTop: "6.5vw" }}
                >
                    <div className="col-lg-5 col-xxl-6 d-none d-lg-block">
                        <HexImage
                            imgSrc={imgFriendsCoffeeShop}
                            alt="Alt text"
                        />
                    </div>

                    <div className="col-lg-7 col-xxl-6">
                        <div className="ms-lg-6">
                            <h2 className="text-primary">
                                We create real connections between patients and
                                clinicians, virtually anywhere
                            </h2>
                            <p class="lead mt-5">
                                The OnMed care station provides a more
                                personalized virtual care experience and
                                connects patients directly with live certified
                                clinicians whenever they need it. Our care
                                station is open 24/7, with no appointment
                                needed. Every examination is one-on-one in
                                real-time, and we can address 85% of a typical
                                Primary Care visit, including all key biometrics
                                and vitals. Patients can also receive needed OTC
                                and most prescription medications at the time of
                                visit.
                            </p>
                            <div className="mt-6">
                                {/* <Link
                                to="/"
                                className="btn btn-primary text-uppercase  mb-3 me-2"
                            >
                                Request a Location
                            </Link>{" "} */}
                                <Link
                                    to="/"
                                    className="btn btn-primary text-uppercase mb-3 d-inline-flex align-items-center"
                                >
                                    <SvgVideoCamera
                                        className="me-2
                                    "
                                        style={{
                                            height: "14px",
                                            width: "auto",
                                        }}
                                    />{" "}
                                    Watch the video
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row justify-content-between">
                        <div className="col-sm-4 offset-sm-3">
                            <img
                                src={imgFriendsCoffeeShop}
                                alt=""
                                className="img-fluid mask-image--hex"
                            />
                        </div>

                        <div className="col-sm-5">
                            <ul className="list-check-mark-orange">
                                <li>
                                    <h5 className="text-uppercase">
                                        Visit us anytime
                                    </h5>
                                    <p>
                                        The OnMed® care station is a simple and
                                        convenient healthcare option everyone
                                        can use, anywhere 24/7 - including rural
                                        areas and remote locations. No
                                        appointment needed.
                                    </p>
                                </li>
                                <li>
                                    <h5 className="text-uppercase">
                                        Virtual doctor’s office
                                    </h5>
                                    <p>
                                        Get the most personal care outside of a
                                        doctor’s office. Talk to a certified
                                        clinician live, and receive 85% of
                                        typical primary care services, including
                                        vitals taken with medical grade
                                        diagnostics.
                                    </p>
                                </li>
                                <li>
                                    <h5 className="text-uppercase">
                                        Meds in Minutes
                                    </h5>
                                    <p>
                                        Our on-Site dispensary delivers most
                                        prescriptions and over-the-counter
                                        medications directly to you, saving time
                                        and eliminating a trip to the pharmacy.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );

    const sectionHowItWorks = (
        <section className="bg-cloud py-4 py-md-6 text-lg-center">
            <div className="container">
                <h2 className="mt-lg-6">How it Works</h2>
                <p className="lead mt-3">
                    Getting Care at an OnMed station is simple
                </p>
                <ol className="list-unstyled row text-dark list-inline-arrows mt-6 mb-0 mb-lg-4">
                    <ListItem
                        imgSrc={imgFriendsCoffeeShop}
                        imgAlt="Alt text"
                        headline="Walk In"
                        body={
                            <p>
                                Walk right up and enter the OnMed® care station
                                at any time. No appointment necessary.
                            </p>
                        }
                    />

                    <ListItem
                        imgSrc={imgFriendsCoffeeShop}
                        imgAlt="Alt text"
                        headline="Press Start"
                        body={
                            <p>
                                Just press START to connect with a certified
                                clinician on live video in real-time.
                            </p>
                        }
                    />
                    <ListItem
                        imgSrc={imgFriendsCoffeeShop}
                        imgAlt="Alt text"
                        headline="Get Exam"
                        body={
                            <p>
                                Have your vitals taken, including blood
                                pressure, pulse, body temperature and
                                respiration rate.
                            </p>
                        }
                    />
                    <ListItem
                        imgSrc={imgFriendsCoffeeShop}
                        imgAlt="Alt text"
                        headline="Walk Out"
                        body={
                            <p>
                                Walk out with OTC medicine and most
                                prescriptions filled right on the spot, from our
                                secure dispensary.
                            </p>
                        }
                    />
                </ol>
            </div>
        </section>
    );

    const sectionPatients = (
        <section className="container card-cols | mt-n4 mt-sm-6 mt-md-2">
            <CardCols
                title="Patients"
                headline={
                    <>
                        Always open. Always{" "}
                        <span className="text-primary">On.</span>
                    </>
                }
                body={
                    <p>
                        Our OnMed care station is like stepping into a mini
                        doctor’s office. No appointment needed. We can even
                        dispense most of your prescriptions and over-the-counter
                        medications right on the spot, eliminating a trip to the
                        pharmacy.
                    </p>
                }
                cta={
                    <a href="#" class="btn-arrow">
                        Tell me more
                    </a>
                }
                img={
                    <img
                        src={imgFriendsCoffeeShop}
                        alt=""
                        className="img-fluid"
                    />
                }
                imgAlignRight={false}
            />
        </section>
    );
    const sectionProviders = (
        <section className="bg-cloud-md d-flex | mt-5 mt-md-2 py-md-6">
            <div className="container card-cols">
                <CardCols
                    title="Providers"
                    headline="Practice everywhere. See your patients anywhere."
                    body={
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
                    }
                    cta={
                        <a href="#" class="btn-arrow">
                            Learn more
                        </a>
                    }
                    img={
                        <img
                            src={imgFriendsCoffeeShop}
                            alt=""
                            className="img-fluid"
                        />
                    }
                    imgAlignRight={true}
                />
            </div>
        </section>
    );
    const sectionPartners = (
        <section className="container card-cols | pb-4 pb-md-0 mt-5 mt-md-0">
            <CardCols
                title="Partners"
                headline="A different kind of doctor's office. A new kind of
                pharmacy."
                body={
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
                }
                cta={
                    <a href="#" class="btn-arrow">
                        Learn more
                    </a>
                }
                img={
                    <img
                        src={imgFriendsCoffeeShop}
                        alt=""
                        className="img-fluid"
                    />
                }
                imgAlignRight={false}
            />

            <div class="testimonial-wrapper row">
                <div class="col-lg-7">
                    <div className="testimonial text-dark">
                        <h5 className="text-primary | mb-4 mb-lg-3 mt-6 pt-4 mt-lg-0 pt-lg-0">
                            Testimonial
                        </h5>
                        <p className="testimonial--text mb-4 mb-lg-3">
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Maecenas sed diam eget risus varius blandit sit amet
                            non magna. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>

                        <p className="testimonial--author">
                            - Firstname Lastname
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionExpanding = (
        <section className="bg-hex-decrescendo d-flex align-items-end mt-5">
            <div className="container my-6">
                <div class="row justify-content-around text-center">
                    <div class="col-md-10">
                        <h2 className="text-primary mb-5">
                            Expanding nationwide
                        </h2>
                        <p className="lead">
                            We are fully committed to making quality healthcare
                            accessible to all, so we’re always growing and
                            expanding. If you’re interested in learning more
                            about OnMed care stations nearest to you, send us
                            your location request.
                        </p>
                        <div className="mt-6">
                            <Link
                                to="/"
                                className="btn btn-primary text-uppercase"
                            >
                                Request a Location
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionContact = (
        <section className="bg-sage py-4 py-md-6">
            <div className="container">
                <div class="row gx-lg-6 gy-4">
                    <div class="col-lg-6">
                        <h3>
                            Opening more doors to Healthcare around the world
                        </h3>
                        <p className="text-dark lead">
                            Please complete this form, and a member of our team
                            will be in touch shortly.
                        </p>
                    </div>
                    <div class="col-lg-6 pb-4 pb-lg-0">
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

                            <Button
                                variant="primary"
                                type="submit"
                                className="text-uppercase"
                            >
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
            {sectionExpanding}
            {sectionContact}

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
