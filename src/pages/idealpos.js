import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import { getImage } from "gatsby-plugin-image"
import PosFeatures from "../components/template/posFeatures"

export default function Ideapos() {
  const { idealposCover, flexImage, reportImage, retailImage } = useStaticQuery(
    graphql`
      query {
        idealposCover: file(
          relativePath: { eq: "PosSolutions/Idealpos/idealposcover.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
        flexImage: file(
          relativePath: { eq: "PosSolutions/Idealpos/idealposflex.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
        reportImage: file(
          relativePath: { eq: "PosSolutions/Idealpos/customize.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
        retailImage: file(
          relativePath: { eq: "PosSolutions/Idealpos/site.jpeg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )
  const coverImage = getImage(idealposCover)
  const flex = getImage(flexImage)
  const report = getImage(reportImage)
  const retail = getImage(retailImage)

  const dataContent = {
    title: "Idealpos",
    coverimage: coverImage,
    leadtitle: "Extensive customization",
    leaddescription:
      "Idealpos is a very popular point of sale software which is both easy to use and highly customizable.",
    secondarydescription:
      "With its wide variety of features it is seen in both retail and hospitality. Its indepth resources give's its customers the cutting edge of point of sale technology!",
    features: [
      {
        id: 0,
        title: "Indepth Customization",
        featureDescription:
          "Idealpos allows for a large degree of customization. You can configure individual buttons to your needs",
        image: report,
      },
      {
        id: 1,
        title: "Flexible",
        featureDescription:
          "Idealpos works on desktops, point of sales, tablets and phones so what ever the need Idealpos will work for you!",
        image: flex,
      },
      {
        id: 2,
        title: "Retail & Hospitality",
        featureDescription:
          "Idealpos is great for both retail and hospitality, with a wide set of features for both sectors",
        image: retail,
      },
    ],
  }

  return (
    <div>
      <Layout>
        <Seo title="Idealpos" />
        <PosFeatures data={dataContent}></PosFeatures>
      </Layout>
    </div>
  )
}
