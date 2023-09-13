import * as React from "react";
import Layout from "../components/layout";
import CardColsSecondary from "../components/card-cols-secondary";
import SvgNewWindow from "../components/svgs/new-window";
import { ImgHeroClinicianStationConsultVMC } from "../components/images/heroes/clinician-station-consult-vmc";
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
                <ImgHeroClinicianStationConsultVMC
                    alt="Step into the future of healthcare"
                    positions="60% 50%"
                />
            }
        >
            Step into the future of healthcare
        </Hero>
    );

    const sectionApplyNow = (
        <section className="bg-cloud py-4 py-6">
            <div className="container text-center py-6">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h2 className="text-primary mb-6">
                            Click Below to Apply Now
                        </h2>
                        

                        <div className="mt-6">
                            {/* <Link
                        to="/"
                        className="btn btn-primary text-uppercase  mb-3 me-2 mx-3"
                    >
                        View PSA Contract
                    </Link>{" "} */}
                            <Link
                                to="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=3ae5dc83-4d29-4017-9f9c-481dcf3fef6d&ccId=19000101_000001&source=LI&lang=en_US&selectedMenuKey=CareerCenter"
                                className="btn btn-primary text-uppercase mb-3  mx-3 d-inline-flex align-items-center"
                                target="_blank"
                            >
                                APPLY NOW
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
                </div>
            </div>
        </section>
    );


    const sectionCareer = (
        <CardColsSecondary
            headline="A career in health care is more than just a job"
            body={
                <p>
                    A career in health care is more than just a job,
                    it's a calling where you make a difference in people's lives
                    each and every day.<br/>
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
                <p className="lead">Our well-being is as important as the patients we serve.<br/>
                We offer benefits and resources to help our employees and their families lead healthy lives.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <dl className="dl-primary lead row">
                        <dt>Health and Wellness</dt>
                        <dd>
                            <li>Medical Coverage (Including Prescription Drugs) </li>
                            <li>Dental Coverage</li>
                            <li>Vision Coverage</li>
                            <li>Telemedicine</li>
                            <li>Use of the OnMed Care Station for Diagnoses</li>
                            <li>Employee Assistance Program</li>
                        </dd>
                        <div className="100%"></div>

                        <dt>Financial</dt>
                        <dd>
                            <li>401(k) Plan that allows traditional and Roth contributions</li>
                            <li>Health Savings Plan (HSA)</li>
                            <li>Life Insurance</li>
                            <li>Accidental Death and Dismemberment (AD&D) Insurance</li>
                            <li>Short and Long-Term Disability Plans</li>
                        </dd>
                        <div className="100%"></div>
                        <dt>Additional Benefits</dt>
                        <dd>
                            <li>Paid Time Off (PTO)</li>
                            <li>Paid Holidays</li>
                            <li>Employee Referral Program</li>
                            <li>Emergency Travel Assistance Program</li>
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
            {sectionApplyNow}
            {sectionCareerPoints}
            {sectionCareer}
            {sectionCommitment}
            {sectionApplyNow}
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
