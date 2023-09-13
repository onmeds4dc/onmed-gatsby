import * as React from "react";
import Layout from "../components/layout";
import CardColsSecondary from "../components/card-cols-secondary";
import SvgNewWindow from "../components/svgs/new-window";
import { ImgHeroClinicianHighFive } from "../components/images/heroes/clinician-high-five";
import { ImgWalkinsWelcome } from "../components/images/walkins-welcome";
import { ImgBoothWomanVitals } from "../components/images/booth-woman-vitals";
import { ImgPillBottlesInBooth } from "../components/images/pill-bottles-in-booth";
import { Link } from "gatsby";
import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";
import CareerPoints from "../modules/careers-points";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";

const CareersPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroClinicianHighFive
                    alt="Career Opportunities"
                    positions="60% 50%"
                />
            }
        >
            Career Opportunities
        </Hero>
    );


    const sectionCareerPoints = (
        <section className="bg-cloud py-5">
            <div className="container py-4 py-md-6">
                <CareerPoints />
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionCareerPoints}
        </Layout>
    );
};

export default CareersPage;

export const Head = () => {
    const title = "Careers - OnMed";
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
