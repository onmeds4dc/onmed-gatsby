import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DocsButtons = () => {
    function RowOfButtons(label, args) {
        let prefix = "";
        let disabled = "";
        if (args === "outline") {
            prefix = "outline-";
        } else if (args === "disabled") {
            disabled = "disabled";
        }

        return (
            <tr>
                <td>{label}</td>
                <td>
                    <Button variant={prefix + "default"} disabled={disabled}>
                        Default
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "primary"} disabled={disabled}>
                        Primary
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "secondary"} disabled={disabled}>
                        Secondary
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "success"} disabled={disabled}>
                        Success
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "warning"} disabled={disabled}>
                        Warning
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "danger"} disabled={disabled}>
                        Danger
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "info"} disabled={disabled}>
                        Info
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "light"} disabled={disabled}>
                        Light
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "dark"} disabled={disabled}>
                        Dark
                    </Button>
                </td>
                <td>
                    <Button variant={prefix + "link"} disabled={disabled}>
                        Link
                    </Button>
                </td>
            </tr>
        );
    }
    return (
        <>
            <section className="docs docs__section">
                <h2 className="mt-2">Buttons</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Default</th>
                            <th>Primary</th>
                            <th>Secondary</th>
                            <th>Success</th>
                            <th>Warning</th>
                            <th>Danger</th>
                            <th>Info</th>
                            <th>Light</th>
                            <th>Dark</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RowOfButtons("Default")}
                        {RowOfButtons("Outline", "outline")}
                        {RowOfButtons("Disabled", "disabled")}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default DocsButtons;
