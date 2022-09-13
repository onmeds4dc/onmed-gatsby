import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../components/layout";
import imgFriendsCoffeeShop from "../../static/images/fpo/friends-coffee-shop-v2.jpg";
import imgWomanLabCoat from "../../static/images/general/woman-lab-coat.jpg";
import imgWomanCurlyHair from "../../static/images/general/woman-curly-hair.jpg";
import imgManWomanHelmet from "../../static/images/general/man-woman-helmets.jpg";
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

// import { jQuery } from "jquery";
// import connections from "jquery-connections";
// import * as $ from "jquery";

// function dotsConnector() {
//     $("#start").connections({
//         to: "#end",
//         class: "related",
//     });

//     var c = $("connection");
//     setInterval(function () {
//         c.connections("update");
//     }, 100);

//     setTimeout(() => {
//         console.log($("connection"));
//         $("connection").html(
//             '<span class="dots-corner dots-corner-1"></span><span class="dots-corner dots-corner-2"></span>'
//         );
//     }, "2000");
// }

const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome, introBody },
    } = data;

    //     const image = getImage(featuredImage.node.localFile);
    // <GatsbyImage image={image} alt="" />

    const sectionIntro = (
        <section className="section-home-intro bg-cloud pt-4 py-md-6">
            <div className="container section-home-intro--inner">
                <div className="row justify-content-between gx-6">
                    <div className="col-md-7 col-lg-6 hex-and-dots--text">
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

                                <Video />
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
                <ListFigureGrid inlineArrows={true}>
                    <ListFigureGridItem
                        headline="Walk In"
                        body={
                            <p>
                                Walk right up and enter the OnMed® care station
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
                                clinician on live video in real-time.
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
                                respiration rate.
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
                        Our OnMed care station is like stepping into a mini
                        doctor’s office. No appointment needed. We can even
                        dispense most of your prescriptions and over-the-counter
                        medications right on the spot, eliminating a trip to the
                        pharmacy.
                    </p>
                }
                cta={
                    <a href="#" className="btn-arrow">
                        Tell me more
                    </a>
                }
                img={
                    <img src={imgManWomanHelmet} alt="" className="img-fluid" />
                }
                imgAlignRight={false}
            />
        </section>
    );
    const sectionClinicians = (
        <section className="bg-cloud-md d-flex | mt-5 mt-md-2 py-md-6">
            <div className="container card-cols">
                <CardCols
                    title="Clinicians"
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
                        <a href="#" className="btn-arrow">
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
                    <a href="#" className="btn-arrow">
                        Learn more
                    </a>
                }
                img={
                    <img src={imgWomanCurlyHair} alt="" className="img-fluid" />
                }
                imgAlignRight={false}
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
                            - Dr. Charlotte P. Morris
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
                            accessible to all, so we’re always growing and
                            expanding. If you’re interested in learning more
                            about OnMed care stations nearest to you, send us
                            your location request.
                        </p>
                        {/* <div className="mt-6">
                            <Link
                                to="/"
                                className="btn btn-primary text-uppercase"
                            >
                                Request a Location
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
    const sectionContact = (
        <ContactForm
            headline="Opening more doors to Healthcare for everyone"
            body="Please complete this form to learn more about how to be a Partner with OnMed. An OnMed team member will be in touch shortly."
        />
    );

    // function Video() {
    //     const [show, setShow] = useState(false);

    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);

    //     return (
    //         <>
    //             <Button variant="primary" onClick={handleShow}>
    //                 Launch demo modal
    //             </Button>

    //             <Modal show={show} onHide={handleClose}>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>Modal heading</Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>
    //                     <YouTube videoId="SkMxdumhrSU" width="100%" />
    //                 </Modal.Body>
    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={handleClose}>
    //                         Close
    //                     </Button>
    //                     <Button variant="primary" onClick={handleClose}>
    //                         Save Changes
    //                     </Button>
    //                 </Modal.Footer>
    //             </Modal>
    //         </>
    //     );
    // }

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
