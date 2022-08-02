import React from "react";
import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";

const DocsLists = () => {
    const listItem1 = loremIpsum({
        avgWordsPerSentence: 5,
        avgSentencesPerParagraph: 1,
    });
    const listItem2 = loremIpsum({
        avgWordsPerSentence: 5,
        avgSentencesPerParagraph: 4,
    });
    const listItem3 = loremIpsum({
        avgWordsPerSentence: 9,
        avgSentencesPerParagraph: 1,
    });
    const listItem4 = loremIpsum({
        avgWordsPerSentence: 2,
        avgSentencesPerParagraph: 1,
    });
    const lists = (
        <section class="docs docs__section">
            <h3 class="ant-typography">Lists</h3>
            <ul>
                <li>{listItem1}</li>
                <li>{listItem2}</li>
                <li>{listItem3}</li>
                <li>{listItem4}</li>
            </ul>
            <h5 class="ant-typography mt-6">Unstyled</h5>
            <ul class="list-unstyled">
                <li>{listItem1}</li>
                <li>{listItem2}</li>
                <li>{listItem3}</li>
                <li>{listItem4}</li>
            </ul>
            {/* <h5 class="ant-typography mt-6">Inline</h5>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item">{listItem1}</li>
                <li class="list-inline-item">{listItem2}</li>
                <li class="list-inline-item">{listItem3}</li>
                <li class="list-inline-item">{listItem4}</li>
            </ul> */}
        </section>
    );

    return <>{lists}</>;
};

export default DocsLists;
