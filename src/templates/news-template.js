import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import NewsStory from "../components/news-story";
import MetaTags from "../components/meta-tags";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NewsTemplate = ({ data: { wpPost } }) => {
  const {
    title,
    content,
    date,
    featuredImage: _img,
    postAcf: _postAcf
  } = wpPost;

  // HeroType "color" has the headline in the hero, and solid color as background
  // HeroType "img" has the headline under the hero, and image as background
  const heroType = _postAcf && _postAcf.herobg === "color" ? "color" : "img";
  let bodyHeadline = "";
  let sectionHero = "";


  if (heroType === "img" && _img) {
    const img =
      <GatsbyImage
        image={getImage(_img.node.localFile)}
        className="mb-4"
        alt={_img.node.altText}
      />;
    sectionHero = <Hero img={img} />;
    bodyHeadline = title;
  } else {
    sectionHero = <Hero heroSecondary={true}>{title}</Hero>;
  }


  return (
    <Layout>
      {sectionHero}
      <NewsStory
        date={date}
        headline={bodyHeadline}
        lead={_postAcf.leadtext}
        body={content}
      />
    </Layout>
  );
};

export const Head = ({ data: { wpPost } }) => {
  const {
    title, excerpt
  } = wpPost;

  return (
    <>
      <title>{title}</title>
      <MetaTags description={excerpt} title={title}></MetaTags>
    </>
  )

};


export const query = graphql`
    query ($id: String!) {
        wpPost(id: { eq: $id }) {
            title
            date(formatString: "MMMM D, YYYY")
            content
            excerpt,
            id
            postAcf {
                herobg
                leadtext
                linkexternal
                linkexternalurl
              }
            featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                          placeholder: DOMINANT_COLOR, 
                          formats: [AUTO, WEBP, AVIF],
                          layout: FULL_WIDTH
                      )
                    }
                  }
                }
              }
        }
    }
`;


export default NewsTemplate;


