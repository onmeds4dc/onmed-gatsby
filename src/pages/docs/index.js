import React from "react";
import LayoutDocs from "../../components/layout-docs";
import DocsTypography from "./typography";
import DocsColor from "./color";
import DocsSpacing from "./spacing";
import DocsLists from "./lists";
import "../../sass/index.scss";

const DocsPage = () => {
    return (
        <LayoutDocs>
            <h1 className="mb-5">Docs</h1>

            <hr className="my-5" />
            <h2 className="mb-5">Utilities</h2>
            <DocsTypography />
            <DocsColor />
            <DocsSpacing />

            <hr className="my-5" />
            <h2 className="mb-5">Components</h2>
            <DocsLists />
        </LayoutDocs>
    );
};

export default DocsPage;
