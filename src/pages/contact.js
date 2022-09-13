import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import ContactFormIFrame from "../components/contact-form-iframe";

const AboutPage = ({ data }) => {
    const sectionHero = (
        <HeroPrimary
            classNames="mb-5 mb-md-6"
            title="Contact us"
            img="/images/heroes/man-touch-screen.jpg"
            imgYPosition="90%"
        />
    );

    const sectionContact = (
        <section className="container py-4 ">
            <p className="lead py-4 py-md-6 text-center">
                Please complete this form, and a member of our team will be in
                touch shortly.
            </p>
            <div class="row justify-content-center">
                <div class="col-md-9 col-md-6">
                    <ContactFormIFrame className="mb-md-6" />
                </div>
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionContact}
        </Layout>
    );
};

export default AboutPage;
