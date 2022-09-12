import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import CardColsSecondary from "../components/card-cols-secondary";
import imgWalkinsWelcome from "../../static/images/general/walkins-welcome.jpg";
import imgCareForAnyone from "../../static/images/general/care-for-anyone.jpg";
import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";

const PatientsPage = ({ data }) => {
    const sectionHero = (
        <HeroPrimary
            classNames="mb-5 mb-md-6"
            title="Just press start"
            img="/images/heroes/man-office-chair.jpg"
            imgXPosition="50%"
        />
    );

    const sectionWalkIn = (
        <CardColsSecondary
            headline="Walk-ins always welcome. Walk out with what you need."
            body={
                <p>
                    No appointment needed, just enter and press START. Plus, we
                    can deliver most common prescriptions and over-the-counter
                    meds right from our on-site dispensary directly to you.
                    Available 24/7.
                </p>
            }
            img={<img src={imgWalkinsWelcome} alt="" className="img-fluid" />}
            imgAlignRight={false}
        />
    );

    const sectionCareAnywhere = (
        <CardColsSecondary
            headline="Care for anyone, anywhere."
            body={
                <p>
                    OnMed is simple, easy and accessible wherever you need it,
                    including rural and remote areas. Connect immediately with a
                    live clinician and get 85% of typical Primary Care services
                    taken care of, including your biometrics and key vitals.
                </p>
            }
            img={<img src={imgCareForAnyone} alt="" className="img-fluid" />}
            imgAlignRight={true}
        />
    );

    const sectionKeyAudienceSellingPoints = (
        <section className="bg-cloud">
            <div className="container py-4 py-md-6">
                <KeyAudienceSellingPoints />
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionWalkIn}
            {sectionCareAnywhere}
            {sectionKeyAudienceSellingPoints}
        </Layout>
    );
};

export default PatientsPage;
