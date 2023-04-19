import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";

const PrivacyPage = ({ data }) => {
    const sectionHero = (
        <Hero heroSecondary={true}>
            Privacy Policy
        </Hero>
    );

    const sectionContent = (
        <div class="container py-4 py-md-6">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-6">
                    <p>Effective Date: January 22, 2021</p>
                    <h2 class="h6 mt-5">INTRODUCTION</h2>
                    <p>MD Health Rx Solutions LLC dba ONMED, on its own behalf and on behalf of its affiliates and/or wholly owned subsidiaries (collectively referred to as “ONMED”, “we”, “us”, or “our”), owns and operates www.ONMED.com and other administrative, technical developmental and security related sites along with various related mobile applications (collectively, the “Website” or “Websites”). Through these Websites we offer various online services that enable visitors to the Websites (“you” or “Visitors”) to receive access to various types of healthcare information and information about our services (“Services”).</p>
                    <p>ONMED understands that privacy of information is of great importance to our Visitors.</p>
                    <h2 class="h6 mt-5">APPLICABILITY OF THIS PRIVACY POLICY</h2>
                    <p>This Web and Mobile Privacy Policy (“Privacy Policy”) describes what information ONMED collects about Visitors on the publicly available portions of the Websites and how that information is used.</p>
                    <p>This Privacy Policy does not apply to information collected from Visitors who register and log-in (“Members”) to the password protected and secure portions of our websites and mobile applications (“Secure Platforms”). These Secure Platforms allow Members to perform certain transactions (e.g. initiate a case) and use our Services. All information stored and collected by ONMED or added by our Members into such Secure Platforms is identifiable, protected health information (PHI) and therefore governed by the Health Insurance Portability and Accountability Act (“HIPAA”). How ONMED uses and discloses such PHI shall be in accordance with our Notice of Privacy Practices. For example, if you have consented to importing data into the Secure Platform, you should review our Notice of Privacy Practices to understand how we use and disclose such PHI. Specifically, ONMED will not use or disclose information received for advertising, marketing, or other used based data mining purposes and will not combine it with other data and sell it.</p>
                    <h2 class="h6 mt-5">AGREEMENT TO THIS PRIVACY POLICY</h2>
                    <p>Your access and use of the Websites is subject to your agreement with this Privacy Policy and the Web and Mobile Terms and Conditions. By using the Website, you expressly agree to the terms of this Privacy Policy and consent to the collection and use of information as discussed in this Privacy Policy.</p>
                    <p>If you do not agree with this Privacy Policy, please do not use or access the Websites for any purpose. Please print a copy of this Privacy Policy for your records.</p>
                    <h2 class="h6 mt-5">MODIFICATIONS TO THIS PRIVACY POLICY</h2>
                    <p>ONMED may revise this Privacy Policy regarding the collection of information at any time. Should this Privacy Policy change materially, ONMED will give notice to you by posting a notice regarding the new policy on the Websites. The revised Privacy Policy will be effective as of its posting unless otherwise stated.</p>
                    <p>By accessing or using the Website after such changes are posted you agree to all such changes.</p>
                    <h2 class="h6 mt-5">COLLECTION, USE AND DISCLOSURE OF INFORMATION</h2>
                    <p>Either ONMED or a third party vendor on behalf of ONMED may automatically collect information while Visitors browse the Websites. We may collect such information by tracking, or asking a third party vendor to track, your click-stream activity when such information is not tied to a user ID through the use of “cookie” technology or by tracking internet protocol (IP) addresses, as explained below.</p>
                    <p>Because we want our Websites to better serve Visitors’ needs, we collect some basic information about Visitors and their devices, including, but not limited to:</p>
                    <ul>
                        <li>IP address (the computer’s address on the Internet)</li>
                        <li>Operating system (e.g. Windows Vista)</li>
                        <li>Browser software (e.g. Microsoft Internet Explorer, Chrome)</li>
                        <li>Internet Service Provider (e.g. AWS)</li>
                        <li>Geographic location (e.g. Tampa, FL.)</li>
                        <li>Type of device (e.g. iPad, desktop)</li>
                        <li>Mobile device crash information</li>
                        <li>Locale and language of device and whether it has fingerprint/face sensors</li>
                        <li>Dates and time you accessed and used the Website, features you used in the Website, and how long you use the Website overall</li>
                        <li>Links you click and pages you view within the Website</li>
                        <li>Pages you view before and after you leave the Website</li>
                    </ul>
                    <p>We use this information to continuously enhance our Websites and to better serve our Visitors’ needs. For example, we use this information to know what browsers people most commonly use, what pages are most often visited, and what functionality is most used. Some of the information we collect from Visitors, such as IP Address, may be considered identifiable personal information (“Personal Information”). Additionally, there are times on our Website that Visitors are able to voluntarily submit Personal Information, such as their name, phone number, and/or email address in order to obtain more information from ONMED. We may remove personal identifiers from your Personal Information and maintain and use it in a de-identified form (“De-Identifiable Information”). De-Identifiable Information and Personal Information are collectively referred to throughout this Privacy Policy as “Information”.</p>
                    <p>The Information collected from Visitors on our Websites may be shared with our suppliers and vendors and used in the aggregate to create summary statistics that help us analyze the Websites’ usage trends, assess what information is of most and least importance, determine technical design specifications, arrange the Websites in the most user-friendly way, and identify system performance or problem areas.</p>
                    <p>By continuing to use the Websites, you hereby consent to the use and disclosure of your Information as set forth below:</p>
                    <ul>
                        <li>within ONMED or with our service providers such as a cloud service providers for data storage;</li>
                        <li>with our financial, insurance, legal, accounting or other advisors that provide professional services to us;</li>
                        <li>to respond to a subpoena, order, legal process, or government request;</li>
                        <li>to protect, establish or exercise our legal rights or defend against legal claims;</li>
                        <li>to investigate, detect, suppress, prevent or take action regarding illegal or prohibited activities, suspected fraud, situations involving potential threats to the reputation or physical safety of any person;</li>
                        <li>if we are to be sold, merged, or amalgamated or substantially all of our assets are to be sold or disposed of, your personal information may be transferred to a potential purchaser if, and to the extent necessary, it is required for the purposes of deciding whether to proceed with the proposed transaction and completing it. If such a sale, merger, acquisition, or disposal is completed, we will use reasonable efforts to direct the transferee to use personal information you have provided to us in a manner that is consistent with this Privacy Policy. Following such a sale or transfer, you may contact the entity to which we transferred your personal information with any inquiries concerning the processing of that information; or</li>
                        <li>as otherwise required by law.</li>
                    </ul>
                    <h2 class="h6 mt-5">COOKIES</h2>
                    <p>Like many companies, we use “cookies” to help you better navigate the Websites. A “cookie” is a small piece of information sent by ONMED’s web-based applications that are stored by your web browser on your computer’s hard drive. Cookies enhance your online experience by saving your preferences while you are visiting a particular Website. The cookies do not contain any identifiable information and cannot profile your system or collect information from your hard drive. Most Internet browsers automatically accept cookies, but you can set your browser to refuse them or to alert you when they are being sent.</p>
                    <p>For more information about the cookies that are used on the Websites and your ability to opt out of use of those cookies, please see ONMED’s Cookies Policy.</p>
                    <h2 class="h6 mt-5">YOUR RIGHTS REGARDING YOUR PERSONAL INFORMATION</h2>
                    <p>Amendment. You have a right to request that ONMED amend or delete the Personal Information it collects from your use of the Websites if you believe it is incorrect or incomplete, and you may request an amendment or deletion for as long as the Personal Information is retained by ONMED. You must submit your request in writing to ONMED and provide a reason to support the requested amendment. ONMED may, under certain circumstances, deny your request by sending you a written notice of denial.</p>
                    <p>Withdrawal of Consent. Subject to applicable law, you may withdraw your consent to uses and disclosures of Personal Information as outlined in this Privacy Policy. You must submit your request in writing to ONMED. Withdrawing consent does not invalidate consent to any collection, use or disclosure of Personal Information to which you consented before consent was withdrawn. If you withdraw consent, or refuse further consent, ONMED’s ability to offer services to you may be limited.</p>
                    <h2 class="h6 mt-5">HOW TO CONTACT US?</h2>
                    <p>Questions or comments regarding this Policy should be submitted to ONMED Privacy Officer by mail or electronic means as follows:</p>
                    <p>ONMED<br />
                        Attention: Privacy Officer<br />
                        14105 McCormick Drive<br />
                        Tampa, FL 33626<br />
                        727-601-4513<br />
                        Privacy@ONMED.com<br />
                    </p>
                    <hr />
                    <h1 class="h3 mt-5 mb-4">PRIVACY POLICY FOR CALIFORNIA RESIDENTS</h1>
                    <p>Effective Date: January 15, 2021</p>
                    <p>This Web and Mobile Privacy Policy for California Residents (“Notice”) supplements and is expressly made part of the information contained in the ONMED Web and Mobile Privacy Policy and applies solely to visitors (“Visitors”) on the publicly available portions of our websites (“Websites”) and who reside in the State of California “You” or “Visitors”). We adopt this Notice to comply with the California Consumer Privacy Act of 2018 (CCPA). Any terms defined in the CCPA have the same meaning when used in this Notice.</p>
                    <h2 class="h6 mt-5">INFORMATION WE COLLECT</h2>
                    <p>Through your use of our Website, we may collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Visitor (“personal information”). The only personal information that our websites have collected from Visitors and used or disclosed for business purposes during the last twelve (12) months is IP Address and information that Visitors have directly provided to us through the Website such as through our testimonial page or when seeking additional information. While IP Address may be considered a personal identifier, ONMED cannot link IP Address to a particular consumer or household.</p>
                    <p>Personal information does not include:</p>
                    <ul>
                        <li>Publicly available information from government records.</li>
                        <li>Deidentified or aggregated consumer information.</li>
                        <li>Information excluded from the CCPA’s scope, like:</li>
                        <li>health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data (which means if you are a member of Teladoc and you log into the secure portion of our website, this Policy does not apply to the information collected or used on the secure portals);</li>
                        <li>personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver’s Privacy Protection Act of 1994.</li>
                    </ul>
                    <p>ONMED obtains the categories of personal information listed above from the following categories of sources:</p>
                    <ul>
                        <li>Directly from you. For example, from information you submit on the testimonial page or contact information on the Website.</li>
                        <li>Indirectly from you. We collect IP Address from you in order to observe your actions on our Websites.</li>
                    </ul>
                    <h2 class="h6 mt-5">USE OF PERSONAL INFORMATION</h2>
                    <p>First and foremost, ONMED does not sell and has not sold any Personal Information in the preceding twelve (12) months.</p>
                    <p>We may use or disclose the personal information we collect for one or more of the following business or marketing purposes:</p>
                    <ul>
                        <li>To supervise, administer and monitor the Websites.</li>
                        <li>To measure and improve the quality, the effectiveness and the delivery of our Websites.</li>
                        <li>Market Teladoc’s services to you</li>
                        <li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li>
                        <li>To provide, support, personalize, and develop our Websites.</li>
                        <li>To personalize your Website experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Websites and third-party sites.</li>
                        <li>To respond to your direct inquiries.</li>
                    </ul>
                    <p>ONMED will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.</p>
                    <h2 class="h6 mt-5">DISCLOSURE OF PERSONAL INFORMATION</h2>
                    <p>ONMED may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.</p>
                    <p>We share the minimum necessary personal information with the following categories of third parties:</p>

                    <ul>
                        <li>Service providers that provide audit, legal, operational, technical or other services for us, such as:
                            <ul>
                                <li>Monitoring website activity</li>
                                <li>Reporting and analytics</li>
                                <li>Marketing and advertising</li>
                                <li>Data aggregators</li>
                            </ul>
                        </li>
                    </ul>

                    <h2 class="h6 mt-5">YOUR RIGHTS AND CHOICES</h2>
                    <p>The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.</p>
                    <h2 class="h6 mt-5">Right to Request Access to Information</h2>
                    <p>You have the right to request that Teladoc notifies you of the personal information about you that we have collected and used. Once we receive and confirm your verifiable consumer request (see Exercising Access, Data Portability, and Deletion Rights), we will disclose to you:</p>
                    <ul>
                        <li>The categories of personal information we collected about you.</li>
                        <li>The categories of sources for the personal information we collected about you.</li>
                        <li>Our business or commercial purpose for collecting that personal information.</li>
                        <li>The categories of third parties with whom we shared that personal information.</li>
                        <li>The specific pieces of personal information we collected about you</li>
                        <li>If we disclosed your personal information for a business purpose a list disclosing:</li>
                        <li>disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.</li>
                    </ul>
                    <h2 class="h6 mt-5">Right to Request Deletion of Information</h2>
                    <p>You have the right to request that ONMED deletes any of your personal information that we collected about you and retained. Once we receive your request and verify who you are, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.</p>
                    <p>We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:</p>
                    <ul>
                        <li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
                        <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
                        <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
                        <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
                        <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.).</li>
                        <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.</li>
                        <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
                        <li>Comply with a legal obligation.</li>
                        <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
                    </ul>
                    <h2 class="h6 mt-5">Exercising Your Rights</h2>
                    <p>To exercise the rights listed above, please submit a request in writing to ONMED via the contact information listed in the Contact Information section.</p>
                    <p>Only you, or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a request related to your personal information. You may also make a request on behalf of your minor child.</p>
                    <p>You may only make a request for access twice within a 12-month period. Your request must:</p>
                    <ul>
                        <li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
                        <li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
                    </ul>
                    <p>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.</p>
                    <p>Making a request does not require you to create an account with us.</p>
                    <p>We will only use personal information provided in a request to verify your identity or authority to make the request.</p>
                    <h2 class="h6 mt-5">Response Timing and Format</h2>
                    <p>We endeavor to respond to a request within forty-five (45) days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.</p>
                    <p>For Requests to Access, our response will only cover the 12-month period preceding the request. The response we provide will also explain the reasons we cannot comply with a request, if applicable. We will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</p>
                    <p>We do not charge a fee to process or respond to your request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>
                    <h2 class="h6 mt-5">NON-DISCRIMINATION</h2>
                    <p>We will not discriminate against you for exercising any of your CCPA rights. We will not:</p>
                    <ul>
                        <li>Deny you goods or services.</li>
                        <li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
                        <li>Provide you a different level or quality of goods or services.</li>
                        <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
                    </ul>
                    <h2 class="h6 mt-5">OTHER CALIFORNIA PRIVACY RIGHTS</h2>
                    <p>California’s “Shine the Light” law (Civil Code Section § 1798.83) permits users of our Websites that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to privacy@ONMED.com.</p>
                    <h2 class="h6 mt-5">CHANGES TO OUR PRIVACY POLICY</h2>
                    <p>ONMED reserves the right to amend this Privacy Policy at our discretion and at any time. When we make changes to this Privacy Policy, we will post the updated Privacy Policy on the Websites and update the Privacy Policy’s effective date. Your continued use of our Websites following the posting of changes constitutes your acceptance of such changes.</p>
                    <h2 class="h6 mt-5">CONTACT INFORMATION</h2>
                    <p>If you have any questions or comments about this Privacy Policy, the ways in which ONMED collects and uses your information described above, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:</p>
                    <p>ONMED<br />
                        14105 McCormick Drive<br />
                        Tampa, FL 33626<br />
                        Privacy@ONMED.com</p>
                </div>
            </div>
        </div>
    );


    return (
        <Layout>
            {sectionHero}
            {sectionContent}
        </Layout>
    );
};

export default PrivacyPage;

export const Head = () => (
    <>
        <title>Privacy Policy - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
