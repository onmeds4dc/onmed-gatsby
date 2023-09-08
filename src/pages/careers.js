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

    const sectionCareer = (
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

    const sectionCommitment = (
        <CardColsSecondary
            headline="The OnMed Commitment"
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

    const sectionBenefits = (
        <section className="container py-6 my-4">
            <div className="text-center">
                <h2>Employee Benefits</h2>
                <p className="lead">Our well-being is as important as the patients we serve.  We offer benefits and resources to help our employees and their families lead healthy lives.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <dl className="dl-primary lead row">
                        <dt>Health and Wellness</dt>
                        <dd>
                            <li>Medical Coverage (Including Prescription Drugs) </li>
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
                    </dl>
                </div>
            </div>
        </section>
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
            {sectionCareer}
            {sectionCommitment}
            {sectionBenefits}
            {sectionKeyAudienceSellingPoints}
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
