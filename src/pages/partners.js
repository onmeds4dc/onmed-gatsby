import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import CardColsSecondary from "../components/card-cols-secondary";
import imgFriendsCoffeeShop from "../../static/images/fpo/friends-coffee-shop-v2.jpg";
import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";

const IndexPage = ({ data }) => {
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
            headline="Walk-ins always welcome. Walk out with what you need."
            body={
                <p>
                    OnMed is a convenient and cost-effective healthcare solution
                    for Large Employers, Providers, Government Agencies, Payers,
                    High-Traffic Venues, Colleges and Universities. We deliver a
                    business and economic model that provides sponsors and
                    patients with a meaningful cost-saving solution for the
                    current challenges of the current brick-and-mortar Primary
                    Care delivery model.
                </p>
            }
            img={
                <img src={imgFriendsCoffeeShop} alt="" className="img-fluid" />
            }
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
                    no physical requirements - just an outlet.
                </p>
            }
            img={
                <img src={imgFriendsCoffeeShop} alt="" className="img-fluid" />
            }
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

    const sectionPartnerRequirements = (
        <section className="container py-6 my-4">
            <h2>Partner requirements</h2>
            <p className="lead">
                Below is an overview of basic partner requirements.
            </p>
            <dl className="dl-primary lead row">
                <dt>3 Year Licensing Agreement</dt>
                <dd>
                    OnMed Care Stations are available through a 3-year Licensing
                    Agreement with all terms and conditions spelled out in the
                    Agreement.
                </dd>
                <div className="100%"></div>

                <dt>OnMed Fees</dt>
                <dd>
                    The OnMed Virtual Care Platform, including the Care Station,
                    OnMed Clinical Staff and necessary service and maintenance
                    are accessed through monthly licensing fees, patient
                    utilization fees and maintenance fees. Additional Marketing
                    and Advertising support and programs are available through
                    separate fee arrangements.
                </dd>
                <div className="100%"></div>
                <dt>Lead Times and Implementation</dt>
                <dd>
                    OnMed Care Stations can be deployed and operational at the
                    Sponsor location within 4 months from the signing of a
                    Letter of Intent.
                </dd>
                <div className="100%"></div>
                <dt>Single or Double OnMed Care Stations</dt>
                <dd>
                    The OnMed Care Station is available in two configurations; a
                    Single Room, featuring one patient consult room with
                    attached Robotic Dispensing System and embedded software and
                    servers or a Double Room, featuring two patient consult
                    rooms with the Robotic Dispensing System and embedded
                    software and servers configured between the patient rooms.
                </dd>
                <div className="100%"></div>
                <dt>Location &amp; Installation Requirements</dt>
                <dd>
                    The free-standing OnMed Care Station requires sufficient
                    available square footage and ceiling height to accommodate
                    the Single or Double Care Station. Additionally, the Care
                    Station requires a dedicated high-speed internet connection
                    and power outlet. The Care Station operates in common indoor
                    HVAC controlled conditions which is secure and monitored.
                    For custom installed locations, other than a free-standing
                    location, OnMed requires additional implementation time and
                    potential fees.
                </dd>
                <div className="100%"></div>
                <dt>Maintenance and Cleaning</dt>
                <dd>
                    OnMed provides a complete Maintenance and Service plan as
                    part of the overall fee structure. Daily cleaning
                    maintenance due to normal patient traffic are the
                    responsibility of the Sponsor.
                </dd>
                <div className="100%"></div>
                <dt>Publicity and Marketing</dt>
                <dd>
                    All Sponsor driven publicity and marketing that utilizes the
                    trademarks, images, technical information or general OnMed
                    marketing information or content requires the approval of
                    OnMed before distribution or release.
                </dd>
            </dl>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionWalkIn}
            {sectionCareAnywhere}
            {sectionKeyAudienceSellingPoints}
            {sectionPartnerRequirements}
        </Layout>
    );
};

export default IndexPage;
