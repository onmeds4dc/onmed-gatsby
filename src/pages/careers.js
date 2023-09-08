import * as React from "react";
import Layout from "../components/layout";
import CardColsSecondary from "../components/card-cols-secondary";

import { ImgHeroBoothScreenStethoscope } from "../components/images/heroes/booth-screen-stethoscope";
import { ImgWalkinsWelcome } from "../components/images/walkins-welcome";
import { ImgBoothWomanVitals } from "../components/images/booth-woman-vitals";
import { ImgPillBottlesInBooth } from "../components/images/pill-bottles-in-booth";

import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";

const CareersPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroBoothScreenStethoscope
                    alt="Step into the future of healthcare"
                    positions="60% 50%"
                />
            }
        >
            Step into the future of healthcare
        </Hero>
    );

    const sectionWalkIn = (
        <CardColsSecondary
            headline="A career in health care is more than just a job"
            body={
                <p>
                    A career in health care is more than just a job,
                    it's a calling where you make a difference in people's lives
                    each and every day.
                    Step into the future of health care with OnMed.
                </p>
            }
            img={<ImgWalkinsWelcome alt="" />}
            imgAlignRight={false}
        />
    );

    const sectionCareAnywhere = (
        <CardColsSecondary
            headline="OnMed is committed to making quality affordable health care accessible to all."
            body={
                <p>
                    Founded in 2013, OnMed is committed to making quality affordable 
                    health care accessible to all. The Company was born out of an innovative 
                    spirit and belief that it could create a more effective way for 
                    people to receive care, including getting the medications they need quickly. 
                </p>
            }
            img={<ImgPillBottlesInBooth alt="" />}
            imgAlignRight={true}
        />
    );

    const sectionVitals = (
        <CardColsSecondary
            headline="Your vitals matter"
            body={
                <p>
                    OnMed’s care visit includes real-time measurements of your
                    key vitals for an accurate diagnosis and treatment
                    experience. Your key health metrics are displayed instantly
                    on the screen.
                </p>
            }
            img={<ImgBoothWomanVitals alt="" />}
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

export const Head = () => {
    const title = "Patients - OnMed";
    return (
        <>
            <title>{title}</title>
            <MetaTags title={title} description="Our OnMed
                    clinicians will join you immediately via our interactive
                    screen to introduce themselves and walk you through your
                    entire appointment." ></MetaTags>
        </>
    )
};
