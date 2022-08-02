import React from "react";
import { Table } from "react-bootstrap";

const DocsTypography = () => {
    const fpo =
        "_____ is a great font. Let's use it all over this website for all the words on the website. Do you know what I mean? It's such a great idea!";
    const fpoBold = fpo;
    return (
        <>
            <section className="docs docs__section">
                <h2>Typography</h2>
                <hr className="my-5" />
                <h3>Text Size</h3>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>
                                <span className="d-none">Class</span>
                            </th>
                            <th>Regular</th>
                            <th>Bold</th>
                            <th>
                                Font size /{" "}
                                <span className="text-nowrap">line height</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Default</td>
                            <td>{fpo}</td>
                            <td>
                                <span className="fw-bold">{fpoBold}</span>
                            </td>
                            <td>16/24</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">
                                <code>.lead</code>
                            </td>
                            <td>
                                <span className="lead">{fpo}</span>
                            </td>
                            <td>
                                <span className="lead fw-bold">{fpoBold}</span>
                            </td>
                            <td>20/28</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">
                                <code>.small </code>
                            </td>
                            <td>
                                <span className="small">{fpo}</span>
                            </td>
                            <td>
                                <span className="small fw-bold">{fpoBold}</span>
                            </td>
                            <td>14/22</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">
                                <code>.tiny</code>
                            </td>
                            <td>
                                <span className="tiny">{fpo}</span>
                            </td>
                            <td>
                                <span className="tiny fw-bold">{fpoBold}</span>
                            </td>
                            <td>12/20</td>
                        </tr>
                    </tbody>
                </Table>

                <h4 className="mt-5 pt-5">Headlines</h4>

                <Table responsive="md">
                    <tbody>
                        <tr>
                            <td>
                                <h1>h1 - {fpo}</h1>
                            </td>
                            <td>56/64</td>
                        </tr>
                        <tr>
                            <td>
                                <h2>h2 - {fpo}</h2>
                            </td>
                            <td>46/54</td>
                        </tr>
                        <tr>
                            <td>
                                <h3>h3 - {fpo}</h3>
                            </td>
                            <td>38/46</td>
                        </tr>
                        <tr>
                            <td>
                                <h3>h4 - {fpo}</h3>
                            </td>
                            <td>30/38</td>
                        </tr>
                        <tr>
                            <td>
                                <h5>h5 - {fpo}</h5>
                            </td>
                            <td>24/32</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>h6 - {fpo}</h6>
                            </td>
                            <td>20/28</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    );
};

export default DocsTypography;
