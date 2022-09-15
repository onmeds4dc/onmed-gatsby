import React, { useState } from "react";
import { graphql } from "gatsby";
import Button from "react-bootstrap/Button";
import Layout from "../components/layout";
import imgWomanLabCoat from "../../static/images/general/woman-lab-coat.jpg";
import imgWomanCurlyHair from "../../static/images/general/woman-curly-hair.jpg";
import imgSectionPatients from "../../static/images/general/woman-blood-pressure.jpg";
import imgHexWalkOut from "../../static/images/hex/walk-out.png";
import imgHexWalkIn from "../../static/images/hex/walk-in.png";
import imgHexPressStart from "../../static/images/hex/press-start.png";
import imgHexGetExam from "../../static/images/hex/get-exam.png";
import imgManBoothPills from "../../static/images/general/man-booth-pills.jpg";
import imgWomanScreenWomanThouchscreen from "../../static/images/general/woman-screen-woman-touchscreen.jpg";
import SvgVideoCamera from "../components/svgs/video-camera";
import CardCols from "../components/card-cols";
import HexImage from "../components/hex-image";
import ListFigureGrid from "../components/list-figure-grid";
import ListFigureGridItem from "../components/list-figure-grid-item";
import ContactForm from "../components/contact-form";
import YouTube from "react-youtube";
import Modal from "react-bootstrap/Modal";
import MetaTags from "../components/meta-tags";

const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome, introBody },
    } = data;

    const sectionIntro = (
        <section className="section-home-intro bg-cloud pt-4 py-md-6">
            <div className="container section-home-intro--inner">
                <div className="row justify-content-between gx-6">
                    <div className="col-md-7 col-lg-6 hex-and-dots--text">
                        <div className="d-flex align-items-center text-center text-md-start ">
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
                                <div id="start" className="hex-and-dots">
                                    <HexImage
                                        imgSrc={imgManBoothPills}
                                        alt="Alt text"
                                        className="hex-and-dots--img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const sectionConnections = (
        <section className="bg-hex-dark-many">
            <div className="container py-4 py-md-6">
                <div className="row justify-content-between mt-lg-6 pt-lg-6">
                    <div className="col-lg-6 col-xxl-6 d-none d-lg-block">
                        <div id="start">
                            <HexImage
                                imgSrc={imgWomanScreenWomanThouchscreen}
                                alt="Alt text"
                                className="hex-and-dots--img"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-xxl-6 hex-and-dots--text">
                        <div className="ms-lg-6">
                            <h2 className="text-primary">
                                We create real connections between patients and
                                clinicians, virtually anywhere
                            </h2>
                            <p className="lead mt-5">
                                The OnMed Care Station provides a more
                                personalized virtual care experience and
                                connects patients directly with live certified
                                clinicians whenever they need it. All OnMed Care
                                Stations are available 7 days a week with
                                extended hours and no appointment needed. Every
                                examination is one-on-one in real-time, and we
                                can address 85% of a typical Primary Care visit,
                                including all key biometrics and vitals.
                                Patients can also receive needed Over The
                                Counter (OTC) and most prescription medications
                                at the time of visit.
                            </p>
                            <div className="mt-6">
                                <Video />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const sectionHowItWorks = (
        <section className="bg-cloud py-6 text-md-center">
            <div className="container">
                <div className="text-center">
                    <h2 className="mt-lg-6">How it Works</h2>
                    <p className="lead mt-3">
                        Getting Care at an OnMed Care Station is simple
                    </p>
                </div>

                <ListFigureGrid>
                    <ListFigureGridItem
                        headline="Walk In"
                        body={
                            <p>
                                Walk right up and enter the OnMed Care Station
                                at any time. No appointment necessary.
                            </p>
                        }
                        img={<HexImage imgSrc={imgHexWalkIn} alt="Alt text" />}
                    />
                    <ListFigureGridItem
                        headline="Press Start"
                        body={
                            <p>
                                Just press START to connect with a certified
                                clinician on live video in real-time to begin
                                your private visit.
                            </p>
                        }
                        img={
                            <HexImage
                                imgSrc={imgHexPressStart}
                                alt="Alt text"
                            />
                        }
                    />
                    <ListFigureGridItem
                        headline="Get Exam"
                        body={
                            <p>
                                Have your vitals taken, including blood
                                pressure, pulse, body temperature and
                                respiration rate and interact with our
                                clinician.
                            </p>
                        }
                        img={<HexImage imgSrc={imgHexGetExam} alt="Alt text" />}
                    />
                    <ListFigureGridItem
                        headline="Walk Out"
                        body={
                            <p>
                                Walk out with OTC medicine and most
                                prescriptions filled right on the spot, from our
                                secure dispensary.
                            </p>
                        }
                        img={<HexImage imgSrc={imgHexWalkOut} alt="Alt text" />}
                    />
                </ListFigureGrid>
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
                        Our OnMed Care Station is like stepping into a mini
                        doctor’s office. No appointment needed. We can diagnose
                        and treat most common conditions and can even dispense
                        most of your prescriptions and over-the-counter
                        medications right on the spot, eliminating a trip to the
                        pharmacy.
                    </p>
                }
                cta={
                    <a href="/patients/" className="btn-arrow">
                        Tell me more
                    </a>
                }
                img={
                    <img
                        src={imgSectionPatients}
                        alt=""
                        className="img-fluid"
                    />
                }
                imgAlignRight={false}
                imgFlush={true}
            />
        </section>
    );
    const sectionClinicians = (
        <section className="bg-cloud-md d-flex | mt-5 mt-md-2">
            <div className="container card-cols">
                <CardCols
                    title="Clinicians"
                    headline="Practice everywhere. See your patients anywhere."
                    body={
                        <p>
                            The quality of our care is not just for our
                            customers, because we’ve created a new way for
                            clinicians to serve and connect with patients, in
                            real-time, through a life-sized virtual experience.
                            We also provide medical grade diagnostics so you can
                            give real professional care. Our OnMed Care Stations
                            even allow you to prescribe and dispense most
                            prescriptions and over-the-counter medications
                            immediately through our secure, on-site dispensary.
                        </p>
                    }
                    cta={
                        <a href="/clinicians/" className="btn-arrow">
                            Learn more
                        </a>
                    }
                    img={
                        <img
                            src={imgWomanLabCoat}
                            alt=""
                            className="img-fluid"
                        />
                    }
                    imgAlignRight={true}
                    imgFlush={true}
                />
            </div>
        </section>
    );
    const sectionPartners = (
        <section className="container card-cols | pb-4 pb-md-0 mt-5 mt-md-0">
            <CardCols
                title="Partners"
                headline="A different kind of Primary Care. A new kind of solution. "
                body={
                    <p>
                        We deliver personalized virtual care solutions, so you
                        can offer comprehensive healthcare on-demand. OnMed is
                        easy to install and fully operational in no time, ready
                        to serve your community and population, members, company
                        employees, business patrons, or even students on campus.
                        Our OnMed Care Station can be customized to your brand
                        and features a modern design that’s sleek and
                        aesthetically pleasing. It’s also cost effective
                        compared to brick-and-mortar Primary Care, including
                        hospitals and clinics. OnMed is the anywhere healthcare
                        whenever you need it most.
                    </p>
                }
                cta={
                    <a href="/partners/" className="btn-arrow">
                        Learn more
                    </a>
                }
                img={
                    <img src={imgWomanCurlyHair} alt="" className="img-fluid" />
                }
                imgAlignRight={false}
                imgFlush={true}
            />

            <div className="testimonial-wrapper row">
                <div className="col-lg-7">
                    <div className="testimonial text-dark">
                        <h5 className="text-primary | mb-4 mb-lg-3 mt-6 pt-4 mt-lg-0 pt-lg-0">
                            Testimonial
                        </h5>
                        <p className="testimonial--text mb-4 mb-lg-3">
                            Tuskegee University has a long history of bringing
                            trusted healthcare to rural spaces in the state of
                            Alabama and worldwide, hosting the very first OnMed
                            Station in the state of Alabama is another
                            affirmative step that Tuskegee University has taken
                            to build on our community and strategic
                            partnerships…
                        </p>

                        <p className="testimonial--author">
                            - Dr. Charlotte P. Morris - President, Tuskegee
                            University
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionExpanding = (
        <section className="bg-hex-decrescendo d-flex align-items-end mt-5">
            <div className="container my-6">
                <div className="row justify-content-around text-center">
                    <div className="col-md-10">
                        <h2 className="text-primary mb-5">
                            Expanding nationwide
                        </h2>
                        <p className="lead">
                            We are fully committed to making quality healthcare
                            affordable and accessible to all, so we’re always
                            growing and expanding. If you’re interested in
                            learning more about OnMed and our innovative Virtual
                            Care Platform, and how it can solve your health care
                            needs, send us your information and we’ll get back
                            to you shortly. We can even set up a demonstration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionContact = (
        <ContactForm
            headline="Opening more doors to healthcare for everyone"
            body="Please complete this form to learn more about how to be a Partner with OnMed.
            An OnMed team member will be in touch shortly."
        />
    );

    function Video() {
        const [lgShow, setLgShow] = useState(false);

        return (
            <>
                <Button
                    className="btn btn-primary text-uppercase mb-3 d-inline-flex align-items-center"
                    onClick={() => setLgShow(true)}
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
                </Button>

                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        <YouTube
                            videoId="SkMxdumhrSU"
                            className="youtube-container"
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    return (
        <Layout pageTitle="home">
            {sectionIntro}
            {sectionConnections}
            {sectionHowItWorks}
            {sectionPatients}
            {sectionClinicians}
            {sectionPartners}
            {sectionExpanding}
            {sectionContact}
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

export const Head = () => (
    <>
        <title>OnMed Station - Instant Med Solutions Clinician Access</title>
        <MetaTags></MetaTags>
    </>
);
