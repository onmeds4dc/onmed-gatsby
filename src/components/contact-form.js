import React from "react";

const ContactForm = (props) => {
    return (
        <section className="bg-sage py-4 py-md-6">
            <div className="container">
                <div className="row gx-lg-6 gy-4">
                    <div className="col-lg-6">
                        <h3>{props.headline}</h3>
                        <p className="text-dark lead">{props.body}</p>
                    </div>
                    <div className="col-lg-6 pb-4 pb-lg-0">
                        <iframe
                            src="https://forms.monday.com/forms/embed/8fb84411802c89fcaba5ed66999ee74e?r=use1"
                            width="100%"
                            height="1300"
                        ></iframe>
                        {/* <Form>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group
                                        className="mb-3 form-floating"
                                        controlId="formYourName"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        <Form.Label>Your Name</Form.Label>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group
                                        className="mb-3 form-floating"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                        <Form.Label>Email address</Form.Label>
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group
                                className="mb-3 form-floating"
                                controlId="formCompanyName"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Company Name"
                                />
                                <Form.Label>Company Name</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3 form-floating"
                                controlId="formSector"
                            >
                                <Form.Select>
                                    <option>Sector 1</option>
                                    <option>Sector 2</option>
                                    <option>Sector 3</option>
                                </Form.Select>
                                <Form.Label>Sector</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3 form-floating"
                                controlId="formMessage"
                            >
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Message"
                                    style={{ height: "auto" }}
                                />
                                <Form.Label>Message</Form.Label>
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="text-uppercase"
                            >
                                Submit
                            </Button>
                        </Form> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
