import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import CardColsSecondary from "../components/card-cols-secondary";
import imgFriendsCoffeeShop from "../../static/images/fpo/friends-coffee-shop-v2.jpg";
import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";
import ContactForm from "../components/contact-form";
import SvgNewWindow from "../components/svgs/new-window";
import imgCareOnSite from "../../static/images/general/woman-green-rain-jacket.jpg";
import imgEasySetup from "../../static/images/general/booth.jpg";

import { Link } from "gatsby";

const PartnersPage = ({ data }) => {
    const sectionHero = (
        <HeroPrimary
            classNames="mb-5 mb-md-6"
            title="Care on-site. Care on demand."
            img="/images/heroes/woman-blood-pressure.jpg"
            imgXPosition="70%"
        />
    );

    const sectionWalkIn = (
        <CardColsSecondary
            headline="Care for anyone. Anywhere."
            body={
                <p>
                    OnMed is a convenient virtual healthcare solution for
                    sponsor partners including Government Agencies, Payers,
                    Providers, Large Employers, Colleges and Universities and
                    high traffic venues. We deliver sponsors and patients with a
                    meaningful cost-saving solution for the challenges of the
                    current brick and mortar Primary Care delivery model. OnMed
                    can deliver care to communities and patients where access
                    and availability is difficult, even in rural and remote
                    areas.
                </p>
            }
            img={<img src={imgCareOnSite} alt="" className="img-fluid" />}
            imgAlignRight={false}
        />
    );

    const sectionCareAnywhere = (
        <CardColsSecondary
            headline="Easy to set up"
            body={
                <p>
                    OnMed Care Stations are easy to install and provide
                    comprehensive virtual care services 24/7, when and where
                    patients need it most. Simple and modern design, with almost
                    no physical requirements - just an outlet and an internet
                    connection.
                </p>
            }
            img={<img src={imgEasySetup} alt="" className="img-fluid" />}
            imgAlignRight={true}
        />
    );

    const sectionKeyAudienceSellingPoints = (
        <section className="bg-cloud py-5">
            <div className="container py-4 py-md-6">
                <KeyAudienceSellingPoints />
            </div>
        </section>
    );

    const sectionPartnerRequirements = (
        <section className="container py-6 my-4">
            <div className="text-center">
                <h2>Partner requirements</h2>
                <p className="lead">
                    Below is an overview of basic partner requirements.
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <dl className="dl-primary lead row">
                        <dt>3 Year Licensing Agreement</dt>
                        <dd>
                            OnMed Care Stations are available through a 3-year
                            Licensing Agreement with all terms and conditions
                            spelled out in the Agreement.
                        </dd>
                        <div className="100%"></div>

                        <dt>OnMed Fees</dt>
                        <dd>
                            The OnMed Virtual Care Platform, including the Care
                            Station, OnMed Clinical Staff and necessary service
                            and maintenance are accessed through monthly
                            licensing fees, patient utilization fees and
                            maintenance fees. Additional Marketing and
                            Advertising support and programs are available
                            through separate fee arrangements.
                        </dd>
                        <div className="100%"></div>
                        <dt>Lead Times and Implementation</dt>
                        <dd>
                            OnMed Care Stations can be deployed and operational
                            at the Sponsor location within 4 months from the
                            signing of a Letter of Intent.
                        </dd>
                        <div className="100%"></div>
                        <dt>Single or Double OnMed Care Stations</dt>
                        <dd>
                            The OnMed Care Station is available in two
                            configurations; a Single Room, featuring one patient
                            consult room with attached Robotic Dispensing System
                            and embedded software and servers or a Double Room,
                            featuring two patient consult rooms with the Robotic
                            Dispensing System and embedded software and servers
                            configured between the patient rooms.
                        </dd>
                        <div className="100%"></div>
                        <dt>Location &amp; Installation Requirements</dt>
                        <dd>
                            The free-standing OnMed Care Station requires
                            sufficient available square footage and ceiling
                            height to accommodate the Single or Double Care
                            Station. Additionally, the Care Station requires a
                            dedicated high-speed internet connection and power
                            outlet. The Care Station operates in common indoor
                            HVAC controlled conditions which is secure and
                            monitored. For custom installed locations, other
                            than a free-standing location, OnMed requires
                            additional implementation time and potential fees.
                        </dd>
                        <div className="100%"></div>
                        <dt>Maintenance and Cleaning</dt>
                        <dd>
                            OnMed provides a complete Maintenance and Service
                            plan as part of the overall fee structure. Daily
                            cleaning maintenance due to normal patient traffic
                            are the responsibility of the Sponsor.
                        </dd>
                        <div className="100%"></div>
                        <dt>Publicity and Marketing</dt>
                        <dd>
                            All Sponsor driven publicity and marketing that
                            utilizes the trademarks, images, technical
                            information or general OnMed marketing information
                            or content requires the approval of OnMed before
                            distribution or release.
                        </dd>
                    </dl>
                </div>
            </div>
        </section>
    );

    const sectionPsaPurchase = (
        <section className="bg-cloud py-4 py-6">
            <div className="container text-center py-6">
                <h2 className="text-primary mb-6">
                    PSA Purchasing Solutions Alliance
                </h2>
                <p className="lead">
                    PSA is a nationwide purchasing cooperative for public
                    agencies. As a PSA member you have access to all of PSA's
                    competitive contracts.
                </p>
                <p className="lead">Reference OnMed Contract No. 22-205</p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="btn btn-primary text-uppercase  mb-3 me-2 mx-3"
                    >
                        View PSA Contract
                    </Link>{" "}
                    <Link
                        to="https://psabuy.org/"
                        className="btn btn-outline-primary bg-white text-uppercase mb-3  mx-3 d-inline-flex align-items-center"
                        target="_blank"
                    >
                        Visit PSABUY.org
                        <SvgNewWindow
                            className="ms-2"
                            style={{
                                height: "14px",
                                width: "auto",
                            }}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );

    const sectionContact = (
        <ContactForm
            headline="Request a quote"
            body="Please complete this form, and a member of our team will be in touch shortly."
        />
    );

    return (
        <Layout>
            {sectionHero}
            {sectionWalkIn}
            {sectionCareAnywhere}
            {sectionKeyAudienceSellingPoints}
            {sectionPartnerRequirements}
            {sectionPsaPurchase}
            {sectionContact}
        </Layout>
    );
};

export default PartnersPage;
