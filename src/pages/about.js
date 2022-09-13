import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import ContactForm from "../components/contact-form";
import CardColsSecondary from "../components/card-cols-secondary";
import imgInnovation from "../../static/images/general/innovation-for-real.jpg";

import imgPortraitTomVanderheyden from "../../static/images/portraits/tom-vanderheyden.jpg";
import imgPortraitRyanBrock from "../../static/images/portraits/ryan-brock.jpg";
import imgPortraitSteveJohnston from "../../static/images/portraits/steve-johnston.jpg";
import imgPortraitPlaceholder from "../../static/images/portraits/placeholder.jpg";
import imgPortraitMikeZeman from "../../static/images/portraits/mike-zeman.jpg";
import imgPortraitPatriciaAgnello from "../../static/images/portraits/patricia-agnello.jpg";
import imgPortraitMarkRoyals from "../../static/images/portraits/mark-royals.jpg";
import imgPortraitLeonardSolio from "../../static/images/portraits/leonard-solio.jpg";
import imgPortraitMalienaLongley from "../../static/images/portraits/maliena-longley.jpg";
import imgPortraitJimSparks from "../../static/images/portraits/jim-sparks.jpg";
import imgPortraitHowardGruverman from "../../static/images/portraits/howard-gruverman.jpg";
import imgPortraitChrisKent from "../../static/images/portraits/chris-kent.jpg";

// const LeadershipItem = (props) => {
//     return (
//         <div class="col-md-6 col-lg-4 mb-md-6">
//             <img src={props.img} alt="" className="img-fluid" />
//             <h5 className="mt-3 mb-0 text-primary">{props.name}</h5>
//             <p className="lead text-uppercase">{props.title}</p>
//         </div>
//     );
// };

const AboutPage = ({ data }) => {
    //     const sectionHero = (
    //         <HeroPrimary
    //             classNames="mb-5 mb-md-6"
    //             title="Just press start"
    //             img="/images/heroes/woman-screen-woman-touchscreen.jpg"
    //             imgXPosition="27%"
    //         />
    //     );

    //     const sectionIntro = (
    //         <section className="container py-4 py-md-6">
    //             <div className="row justify-content-center">
    //                 <div className="col-lg-8 col-xxl-6">
    //                     <p>
    //                         OnMed was founded on the commitment to make quality
    //                         affordable healthcare accessible to all. The company was
    //                         born out of an innovative spirit and belief that it
    //                         could create a more effective way for people to receive
    //                         care, including getting the medications they need
    //                         quickly. Our goal was to create a patient experience
    //                         that maintained clinical standards and protocols to
    //                         provide a highly personalized empathy-based clinician
    //                         patient connection. The OnMed Virtual Care Platform
    //                         utilizes a broad range of diagnostic and interactive
    //                         technologies to ensure a highly efficient and effective
    //                         experience, but does not sacrifice the real-life
    //                         dynamics of a traditional brick and mortar clinic
    //                         setting.
    //                     </p>
    //                     <p>
    //                         Beyond designing a new Primary Care model and patient
    //                         experience with the OnMed platform, we also envisioned a
    //                         new professional opportunity for clinicians to practice
    //                         medicine and serve patients without the normal
    //                         constraints or requirements of working inside hospitals
    //                         or clinics. Going forward, OnMed will continue to expand
    //                         the breadth of care provided and clinical needs
    //                         addressed through new technologies and services, along
    //                         with our on-going commitment to deliver the best patient
    //                         experience possible.
    //                     </p>
    //                 </div>
    //             </div>
    //         </section>
    //     );

    //     const sectionInnovation = (
    //         <CardColsSecondary
    //             headline="Innovation for real"
    //             body={
    //                 <p>
    //                     Over 31 Million people in the US alone do not have access to
    //                     healthcare. At OnMed, we believe everyone has a right to
    //                     affordable convenient care. This real problem can only be
    //                     solved with real innovation. That’s why we combined the best
    //                     of interactive and diagnostic technology, with the medical
    //                     expertise and empathy of our dedicated clinicians. Together,
    //                     we’re opening the door to better health everywhere. That’s
    //                     innovation for real.
    //                 </p>
    //             }
    //             img={<img src={imgInnovation} alt="" className="img-fluid" />}
    //             imgAlignRight={false}
    //         />
    //     );

    //     const sectionLeadershipTeam = (
    //         <section className="container">
    //             <div class="row">
    //                 <LeadershipItem
    //                     name="Tom Vanderheyden"
    //                     title="Chief executive officer"
    //                     img={imgPortraitTomVanderheyden}
    //                 />
    //                 <LeadershipItem
    //                     name="Chris Kent"
    //                     title="Chief operating Officer"
    //                     img={imgPortraitChrisKent}
    //                 />
    //                 <LeadershipItem
    //                     name="Howard Gruverman"
    //                     title="Chief comMercial Officer"
    //                     img={imgPortraitHowardGruverman}
    //                 />
    //                 <LeadershipItem
    //                     name="Jim Sparks"
    //                     title="Chief financial officers"
    //                     img={imgPortraitJimSparks}
    //                 />
    //                 <LeadershipItem
    //                     name="Maliena Longley"
    //                     title="Chief Medical officer"
    //                     img={imgPortraitMalienaLongley}
    //                 />
    //                 <LeadershipItem
    //                     name="Mike Zeman"
    //                     title="Chief Marketing Officer"
    //                     img={imgPortraitMikeZeman}
    //                 />
    //                 <LeadershipItem
    //                     name="Patricia Agnello"
    //                     title="Chief HR Officer"
    //                     img={imgPortraitPatriciaAgnello}
    //                 />
    //                 <LeadershipItem
    //                     name="Ryan Brock"
    //                     title="Chief Technology Officer"
    //                     img={imgPortraitRyanBrock}
    //                 />
    //                 <LeadershipItem
    //                     name="Steve Johnston"
    //                     title="Chief legal officer"
    //                     img={imgPortraitSteveJohnston}
    //                 />
    //                 <LeadershipItem
    //                     name="Leonard Solio"
    //                     title="Board chair"
    //                     img={imgPortraitLeonardSolio}
    //                 />
    //                 <LeadershipItem
    //                     name="Mark Royals"
    //                     title="Board Member"
    //                     img={imgPortraitMarkRoyals}
    //                 />
    //                 <LeadershipItem
    //                     name="Robert Forsythe"
    //                     title="Board Member"
    //                     img={imgPortraitPlaceholder}
    //                 />
    //             </div>
    //         </section>
    //     );

    //     const sectionContact = (
    //         <ContactForm
    //             headline="You are the connection to better health"
    //             body="OnMed is a fast growing mission-driven company. We are always looking for people who are interested in making a difference in healthcare and within the company. We are adding positions across all areas of our company. If you are interested in a career at OnMed, please send us your information. "
    //         />
    //     );

    return (
        <Layout>
            {/* {sectionHero}
            {sectionIntro}
            {sectionInnovation}
            {sectionLeadershipTeam}
            {sectionContact} */}
        </Layout>
    );
};

export default AboutPage;
