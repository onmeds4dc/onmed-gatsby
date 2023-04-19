import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";

const TermsPage = () => {
    const sectionHero = (
        <Hero heroSecondary={true}>
            Terms and Conditions
        </Hero>
    );

    const sectionContent = (
        <div class="container py-4 py-md-6">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-6">
                    <p>Effective Date: July 1, 2019</p>
                    <p>These Terms and Conditions ("Terms and Conditions") form a legal agreement between MD Health RX Solutions LLC dba ONMED and you, the individual ("you" and "your") concerning your access to and use of the various services offered through the Websites and the Platforms (as defined below). Use of any of the Websites or Platforms constitutes your acceptance of these Terms and Conditions and the Web and Mobile Privacy Policy.</p>
                    <p>ONMED on its own behalf and on behalf of its affiliates and/or wholly owned subsidiaries, and (collectively referred to as "ONMED", "we", "us", or "our"), ONMED makes certain telehealth related information available to you and/or facilitates your access to telemedicine and expert medical services ("ONMED Health Services"). ONMED owns and operates (i) various publicly available websites, including without limitation, www.ONMED.com and others collectively, "Websites") and (ii) various web-based and mobile applications that require you to create an account in order to use a ONMED Health Service (collectively, "Platforms").</p>
                    <p>By using the Websites and/or the Platforms, you expressly agree to these Terms and Conditions. If you do not agree to these Terms and Conditions, you should immediately cease all use of and access to all of the Websites and Platforms. Please print a copy of these Terms and Conditions for your records.</p>
                    <h2 className="h6 mt-5">Modifications to these terms and conditions</h2>
                    <p>ONMED may in its sole discretion, without prior notice to you, revise these Terms and Conditions at any time. Should these Terms and Conditions change materially, ONMED will update the Effective Date noted above and post a notice regarding the updated Terms and Conditions on the Websites. The amended Terms and Conditions will also appear when the Platforms are accessed by you and you will need to acknowledge your agreement to the amended Terms and Conditions prior to being able to continue to use the Platforms. If you do not agree to the terms of the amended Terms and Conditions, your sole and exclusive remedy is to discontinue your use of the Websites and Platforms and you will be deemed to have terminated these Terms and Conditions. Amended Terms and Conditions will be effective as of the Effective Date unless otherwise stated. By accessing or using the Websites and the Platforms after such changes are posted you agree and consent to all such changes.</p>
                    <h2 className="h6 mt-5">Access to the platforms</h2>
                    <p>You may access and use the Platforms via remote access connectivity. ONMED grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferable license to use the Platforms in accordance with these Terms and Conditions. In order to use the Platforms, you will be asked to register an account and create login information, including without limitation, username and passwords. You must safeguard your login information that you use to access the Platforms and you must not disclose this information to anyone. You must immediately notify ONMED of any unauthorized use of your user account or of any other breach of security that you become aware of involving and relating to the Platforms by email to privacy@ONMED.com.</p>
                    <h2 className="h6 mt-5">ONMED Health's role</h2>
                    <p>ONMED is not an insurance provider nor are we a prescription fulfillment warehouse. ONMED's role is limited to making certain telehealth related information available to you and/or facilitate your access to telemedicine and expert medical services. ONMED employs and also utilizes 3rd parties for telemedicine services to you through the Platform.</p>
                    <h2 className="h6 mt-5">Your representations and warranties</h2>
                    <p>By registering on the Platforms, you represent and warrant the following: (i) you are at least eighteen (18) years of age or have a consenting guardian, (ii) you have the legal ability and authority to enter into these Terms and Conditions with ONMED, (iii) the information you have provided to ONMED in your registration is accurate and complete, (iv) you will comply with any and all laws applicable to your use of the Websites and Platforms, (v) you will not interfere with a third party's use and enjoyment of the Websites and Platforms, (vi) you will not interfere with or disrupt ONMED's or its vendors' security measures, (vii) if any information you provide to ONMED becomes inaccurate, incomplete or otherwise false or misleading, you will immediately notify ONMED, (viii) you acknowledge that access to the healthcare services provided through the Platforms are not "insured services" under any provincial health plans, (ix) you acknowledge that any fees paid by you or by any other persons on your behalf are not provided in exchange for any undertaking by ONMED or its representatives that such healthcare services will be made available to you, and (x) you are accessing the Websites and Platforms for yourself or a child under the age of eighteen for whom you are the legal guardian.</p>
                    <h2 className="h6 mt-5">Termination</h2>
                    <p>If you violate these Terms and Conditions, your ability to use the Websites and/or Platforms will be terminated.  ONMED may, in its sole discretion, terminate your access to the Websites and/or Platforms, or any portion thereof, for any reason whatsoever without prior notice. These actions are in addition to any other right or remedy ONMED may have available at law. Further, ONMED shall not be liable to you or any third party for any such termination or discontinuance. You may terminate these Terms and Conditions by ceasing to access and use the Websites and Platforms. Upon any termination of these Terms and Conditions you must immediately cease use of the Websites and Platforms. To the extent permitted by applicable law, the disclaimers, limitations on liability, termination and your warranties and indemnities shall survive any termination of these Terms and Conditions.</p>
                    <h2 className="h6 mt-5">Prohibited Use</h2>
                    <p>In using the Websites and Platforms, you agree not to:</p>
                    <ul>
                        <li>Send or otherwise transmit to or through the Websites and Platforms any unlawful, infringing, harmful, harassing, defamatory, threatening, hateful or otherwise objectionable material of any kind, any material that can cause harm or delay to the Websites and Platforms or computers of any kind, and any unsolicited advertising, solicitation or promotional materials;</li>
                        <li>Misrepresent your identity or affiliation in any way;</li>
                        <li>Restrict or inhibit any person from using the Websites and Platforms, disclose personal information obtained from the Websites and Platforms or collect information about users of the Websites and Platforms;</li>
                        <li>Reverse engineer, disassemble or decompile any section or technology on the Websites and Platforms, or attempt to do any of the foregoing;</li>
                        <li>Gain unauthorized access to the Websites and Platforms, to other users' accounts, names, personally identifiable information or other information, or to other computers or websites connected or linked to the Websites and Platforms;</li>
                        <li>Launch or use any automated system, including without limitation, "robots," "spiders," or "offline readers," that access the Websites and Platforms in a manner that sends more request messages to our servers in a given period of time than a human can reasonably produce in the same period by using a conventional web browser;</li>
                        <li>Send or otherwise transmit to or through the Websites and Platforms chain letters, unsolicited messages, so-called "spamming" or "phishing" messages, or messages marketing or advertising goods and services;</li>
                        <li>Post, transmit or otherwise make available any virus, worm, spyware or any other computer code, file or program that may or is intended to damage or hijack the operation of any hardware, software or telecommunications equipment;</li>
                        <li>Violate any applicable laws or regulations in any way;</li>
                        <li>Alter or modify any part of the content or services offered on or through the Websites and Platforms;</li>
                        <li>Allow any other person to use the Platforms with your registration or login information;</li>
                        <li>Breach or otherwise circumvent ONMED security or authentication measures; and</li>
                        <li>Assist or permit any persons in engaging in any of the activities described above.</li>
                    </ul>
                    <h2 className="h6 mt-5">Intellectual property rights and content</h2>
                    <p>ONMED is the sole and exclusive owner of the Websites and Platforms, including any and all copyright, patent, trademark, trade secret and other ownership and intellectual property rights, in and to the Websites and Platforms and any related materials and documentation. No title or ownership of the Websites and Platforms or any portion thereof is transferred to you hereunder. ONMED reserves all rights not expressly granted hereunder. You agree not to change or delete any copyright or proprietary notice related to materials downloaded from the Websites and/or Platforms.</p>
                    <p>You may provide input, comments or suggestions regarding the Websites and Platforms or ONMED Health Services ("Feedback"). You acknowledge and agree that ONMED may use any Feedback without any obligation to you and you hereby grant ONMED a worldwide, perpetual, irrevocable, royalty-free, transferable license to reproduce, display, perform, distribute, publish, modify, edit or otherwise use such Feedback as ONMED may deem appropriate, without restriction, for any and all commercial and/or non-commercial purposes, in its sole discretion.</p>
                    <h2 className="h6 mt-5">External links</h2>
                    <p>The Websites and Platforms may contain links to third-party websites. Linked sites are not under the control of ONMED, and ONMED is not responsible for the content of any linked site.  Links are provided as a convenience only, and a link does not imply that ONMED endorses, sponsors, or is affiliated with the linked site.  Your use of third-party websites is at your own risk and subject to the terms and conditions of use for such sites; these Terms do not apply to other websites. ONMED disclaims any and all liability for any information, including but without limitation, any medical and health treatment information set forth on linked sites.</p>
                    <h2 className="h6 mt-5">No endorsements</h2>
                    <p>Reference to any product, recording, event, process, publication, service, or offering of any third party by name, trade name, trademark, service mark, company name or otherwise does not constitute or imply the endorsement or recommendation of such by ONMED. Any views expressed by third parties on the Websites and Platforms are solely the views of such third party and ONMED assumes no responsibility for the accuracy or veracity of any statement made by such third party.</p>
                    <h2 className="h6 mt-5">Indemnification and limitation of liability</h2>
                    <p>You agree to defend, indemnify and hold ONMED, its officers, directors, employees, shareholders, affiliates, third-party contractors, agents, licensors and suppliers (each a ONMED Party and collectively ONMED Parties), harmless from and against any claims, actions or demands, losses, liabilities, damages, costs, expenses and settlements (including without limitation reasonable attorney and accounting fees), resulting from or alleged to result from, directly or indirectly, your (a) violation of these Terms and Conditions; (b) access to or use of the Platform and Websites; and (c) provision of other disclosure to ONMED of any other information or data and the use of same by ONMED or other ONMED Party as contemplated hereunder.</p>
                    <p>IN NO EVENT SHALL ONMED BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM ANY LOSS OF USE, LOSS OF PROFITS, LITIGATION, OR ANY OTHER PECUNIARY LOSS, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE WEBSITES OR PLATFORMS OR THE PROVISION OF OR FAILURE TO MAKE AVAILABLE ANY SUCH PRODUCTS, GOODS, OR SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                    <p>ONMED shall not be liable for any failure to perform its obligations hereunder where the failure results from any cause beyond ONMED's reasonable control, including, without limitation, mechanical, electronic, or communications failure or degradation.</p>
                    <p>The terms of these Terms and Conditions that limit liability reflect an informed voluntary allocation of risk; such allocation represents a material part of these Terms and Conditions. You agree that the limitations of liabilities set out in these Terms and Conditions are fair and reasonable in the circumstances.</p>
                    <h2 className="h6 mt-5">Disclaimer</h2>
                    <p>The Websites and Platforms are provided on an "as is" and "as available" basis and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, ONMED disclaims all representations, warranties, and conditions, express or implied, including, but not limited to, implied condition or warranties of merchantability and fitness for a particular purpose. ONMED does not warrant that the Websites and Platforms will be uninterrupted or error-free, that defects will be corrected or that the Websites and Platforms or the server that makes it available are free of viruses or other harmful components.</p>
                    <p>ONMED makes no guarantees, and disclaims any implied warranty or representation about its accuracy, relevance, timeliness, completeness, or appropriateness of any content posted on the Website and Platforms for a particular purpose.  ONMED assumes no liability arising from or relating to the delay, failure, interruption, or corruption of any data or other information transmitted in connection with use of the Websites and/or Platforms.</p>
                    <p>Applicable law may not allow the exclusion of implied warranties, so the above exclusion may not apply to you.</p>
                    <h2 className="h6 mt-5">Children</h2>
                    <p>The Websites and Platforms are not intended for children under the age of 13. If you are under 13 years of age, please do not use or access the Websites or Platforms at any time or in any manner. By using the Websites or Platforms, you affirm that you are over the age of 13. ONMED does not seek through the Websites or Platforms to gather personal information from or about persons under the age of 13 without the consent of a parent or guardian.</p>
                    <h2 className="h6 mt-5">Choice of law and jurisdiction</h2>
                    <p>These Terms and Conditions are governed by the laws of Florida. The parties irrevocably submit to the exclusive jurisdiction of the courts of the State of Florida in respect of all matters and disputes arising hereunder, and waive any defense of lack of personal jurisdiction in that jurisdiction. These Terms and Conditions are not governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is hereby expressly excluded. If any provision of these Terms and Conditions is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms and Conditions, which shall remain in full force and effect.</p>
                    <h2 className="h6 mt-5">Personal information and privacy policy</h2>
                    <p>In these Terms and Conditions, "personal information" means any information about an identifiable individual, such as your name, email address, mailing address, gender, date of birth, any personal or protected health information, or, any data about you that you elect to provide electronically through the Websites and Platforms and any other information that identifies who you are. Personal Information will be used by ONMED solely in accordance with these Terms and Conditions, and ONMED’s Web and Mobile Privacy Policy (or as otherwise agreed upon between you and ONMED in writing).</p>
                    <p>You agree that ONMED has the right to monitor and review your use of the Websites and Platforms from time to time, and to use "cookies", "log files" and your "browsing data" in accordance with the Cookie Policy.</p>
                    <h2 className="h6 mt-5">Waiver</h2>
                    <p>No delay or omission by ONMED to exercise any right or power it has under these Terms and Conditions or to object to the failure of any covenant of you to be performed in a timely and complete manner, shall impair any such right or power or be construed as a waiver of any succeeding breach or any other covenant. Any waivers by ONMED must be in writing and signed by an authorized representative of ONMED.</p>
                    <h2 className="h6 mt-5">Entire agreement</h2>
                    <p>These Terms and Conditions constitute the entire agreement between you and ONMED as it relates to the access to, and use of, the Platform and Websites and the subject matter of these Terms and Conditions and supersede all prior or contemporaneous agreements, negotiations, representations and proposals, written or oral between ONMED and you.</p>
                    <h2 className="h6 mt-5">Electronic documents</h2>
                    <p>This electronic document, and all other electronic documents referred to or incorporated herein, will be: (a) deemed for all purposes to be a "writing" or "in writing", and to comply with all statutory, contractual, and other legal requirements for a writing; and (b) legally enforceable as a signed agreement. A printed version of these Terms and Conditions and any notice given in electronic form shall be admissible in judicial proceedings or administrative proceedings based upon or relating to these Terms and Conditions to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.</p>
                    <h2 className="h6 mt-5">Assignment</h2>
                    <p>These Terms and Conditions are personal to you, and are not assignable, transferable, or sublicensable by you except with ONMED’s prior written consent. ONMED may assign, transfer, or delegate any of its rights and obligations hereunder without your consent.</p>
                    <h2 className="h6 mt-5">Language</h2>
                    <p>English shall be the language of these Terms and the parties waive any right to use and rely upon any other language or translations. Il est la volonté expresse des parties que les présentes Conditions d'utilisation et tous les documents qui s'y rapportent soient rédigés en langue anglaise, exception faite des documents pour lesquels la loi exige l'usage exclusif du français.</p>
                    <h2 className="h6 mt-5">Contact / Notices</h2>
                    <p>If you have any questions about the Terms and Conditions, or need to provide notice to, or communicate with, ONMED under the Terms and Conditions, please contact ONMED using the following contact details:</p>
                    <p>ONMED<br />
                        Attn: ONMED Privacy Officer<br />
                        14105 McCormick Drive<br />
                        Tampa, Florida 33626<br />
                        727-601-4513<br />
                        privacy@onmed.com</p>
                    <p>ONMED may provide notices or communications to you on the Websites and/or Platforms and you agree that such notices shall constitute notice to you whether or not you actually access the notice.</p>

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

export default TermsPage;

export const Head = () => (
    <>
        <title>Terms and  Conditions - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
