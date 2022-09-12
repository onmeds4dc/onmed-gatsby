import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import CardColsSecondary from "../components/card-cols-secondary";
import imgQualifiedClinicians from "../../static/images/general/qualified-clincians.jpg";
import imgBetterAccess from "../../static/images/general/better-access.jpg";
import imgMakeTheLivingroomp from "../../static/images/general/make-the-livingroom.jpg";
import imgOnboarding from "../../static/images/general/onboarding-at-onmed.jpg";

import ContactForm from "../components/contact-form";

const ProvidersPage = ({ data }) => {
    const sectionHero = (
        <HeroPrimary
            classNames="mb-5 mb-md-6"
            title="A real connectiont"
            img="/images/heroes/woman-screen-man-pills-sm.jpg"
            imgXPosition="10%"
            imgYPosition="70%"
        />
    );

    const sectionQualifiedClinicians = (
        <CardColsSecondary
            headline="Qualified clinicians. Quality care."
            body={
                <p>
                    As a part of OnMed, you can provide high quality care for
                    patients through one-on-one virtual consultations, in
                    real-time. The clinician and patient connection is crucial
                    to our success and yours. Every interactive exam utilizes
                    medical grade diagnostics specifically designed to take
                    vitals and key biometrics, allowing you to address patient
                    health concerns accurately and quickly. Our on-site
                    dispensary also lets you prescribe and deliver most
                    medications directly to patients in minutes.
                </p>
            }
            img={
                <img
                    src={imgQualifiedClinicians}
                    alt=""
                    className="img-fluid"
                />
            }
            imgAlignRight={false}
        />
    );

    const sectionBetterAccess = (
        <CardColsSecondary
            headline="Better access means better health"
            body={
                <p>
                    Access to Primary Care can be difficult for many, not to
                    mention costly. In rural and remote communities it may not
                    even be within reach at all. That’s why we’re on a mission
                    to make quality care affordable and accessible for everyone.
                    Join us in our mission by applying now.
                </p>
            }
            img={<img src={imgBetterAccess} alt="" className="img-fluid" />}
            imgAlignRight={true}
        />
    );

    const sectionMakeLiving = (
        <CardColsSecondary
            headline="Make the living room your waiting room"
            body={
                <p>
                    We value your expertise, and know that patients everywhere
                    need it. When you work at OnMed, you’ll have more
                    flexibility compared to traditional hospitals and
                    brick-and-mortar clinics, without sacrificing the core
                    principles of the clinician patient relationship. Now you
                    can set your own schedule and even work from your home
                    office, utilizing our proprietary remote interactive
                    technology and tools.
                </p>
            }
            img={
                <img src={imgMakeTheLivingroomp} alt="" className="img-fluid" />
            }
            imgAlignRight={false}
        />
    );

    const sectionOnboarding = (
        <CardColsSecondary
            headline="Onboarding at OnMed"
            body={
                <p>
                    We use our technology as a means to best serve our patients.
                    But the OnMed experience is nothing without human compassion
                    and empathy. We will provide you all the training you need
                    to use the diagnostics systems of our Care Stations to
                    examine, diagnose and offer the treatment that patients can
                    trust, just like a typical doctor’s visit.{" "}
                </p>
            }
            img={<img src={imgOnboarding} alt="" className="img-fluid" />}
            imgAlignRight={true}
        />
    );

    const sectionContact = (
        <ContactForm
            headline="You are the connection to better health"
            body="OnMed is looking for certified and board eligible clinicians; including doctors, pharmacists, CNAs and nurse practitioners. We're hiring right now in all 50 states, as well as Puerto Rico."
        />
    );

    return (
        <Layout>
            {sectionHero}
            {sectionQualifiedClinicians}
            {sectionBetterAccess}
            {sectionMakeLiving}
            {sectionOnboarding}
            {sectionContact}
        </Layout>
    );
};

export default ProvidersPage;
