import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import CardColsSecondary from "../components/card-cols-secondary";
import imgWalkinsWelcome from "../../static/images/general/walkins-welcome.jpg";
import imgYourVitalsMatter from "../../static/images/general/booth-woman-vitals.jpg";
import imgMedsInMinutes from "../../static/images/general/pill-bottles-in-booth.jpg";
import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";

const PatientsPage = ({ data }) => {
    const sectionHero = (
        <HeroPrimary
            classNames="mb-5 mb-md-6"
            title="Step into the future of healthcare"
            img="/images/heroes/booth-screen-stethoscope.jpg"
            imgXPosition="60%"
        />
    );

    const sectionWalkIn = (
        <CardColsSecondary
            headline="Walk-ins always welcome. Walk out with what you need."
            body={
                <p>
                    No appointment needed, just enter and press START. Our OnMed
                    clinicians will join you immediately via our interactive
                    screen to introduce themselves and walk you through your
                    entire appointment. Your visit will be private, safe and
                    secure and the Care Station room will automatically clean
                    and sanitize itself after you leave for the next patient.
                </p>
            }
            img={<img src={imgWalkinsWelcome} alt="" className="img-fluid" />}
            imgAlignRight={false}
        />
    );

    const sectionCareAnywhere = (
        <CardColsSecondary
            headline="Meds in minutes"
            body={
                <p>
                    OnMed’s proprietary robotic dispensary system allows our
                    clinicians to provide you with the necessary OTC or
                    prescription medications at the time of your visit.
                </p>
            }
            img={<img src={imgMedsInMinutes} alt="" className="img-fluid" />}
            imgAlignRight={true}
        />
    );

    const sectionVitals = (
        <CardColsSecondary
            headline="Your vitals matter"
            body={
                <p>
                    OnMed’s care visit includes real-time measurement of your
                    key vitals for an accurate diagnosis and treatment
                    experience. Your key health metrics are displayed instantly
                    on the screen.
                </p>
            }
            img={<img src={imgYourVitalsMatter} alt="" className="img-fluid" />}
            imgAlignRight={false}
        />
    );

    const sectionKeyAudienceSellingPoints = (
        <section className="bg-cloud py-5">
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
            {sectionVitals}
            {sectionKeyAudienceSellingPoints}
        </Layout>
    );
};

export default PatientsPage;
