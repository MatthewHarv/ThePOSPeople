import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import { getImage } from "gatsby-plugin-image"
import PosFeatures from "../components/template/posFeatures"

export default function Ramsys() {
  const { ramsysCover, flexImage, reportImage, retailImage } = useStaticQuery(
    graphql`
      query {
        ramsysCover: file(
          relativePath: { eq: "PosSolutions/Ramsys/ramsyscover3.png" }
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
          relativePath: { eq: "PosSolutions/Ramsys/flexible.png" }
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
          relativePath: { eq: "PosSolutions/Ramsys/report.png" }
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
          relativePath: { eq: "PosSolutions/Ramsys/retail.jpeg" }
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
  const coverImage = getImage(ramsysCover)
  const flex = getImage(flexImage)
  const report = getImage(reportImage)
  const retail = getImage(retailImage)

  const dataContent = {
    title: "Ramsys",
    coverimage: coverImage,
    leadtitle: "Specialists in Retail",
    leaddescription:
      "Ramsys was built to answer the need for central control and reporting.",
    secondarydescription:
      "Ramsys consists of 2 parts, a fast, reliable and easy to use Point Of Sale and a centralised, cloud-based application providing consolidated reporting and control.",
    features: [
      {
        id: 0,
        title: "Indepth Reporting",
        featureDescription:
          "Ramsys has extensive reporting so you get to know your business inside out!",
        image: report,
      },
      {
        id: 1,
        title: "Flexible",
        featureDescription:
          "Ramsys will work on a variety of devices to suite your business needs!",
        image: flex,
      },
      {
        id: 2,
        title: "Retail",
        featureDescription:
          "System is built for retail so you know you will have the best in the business.",
        image: retail,
      },
    ],
  }

  return (
    <div>
      <Layout>
        <Seo title="Ramsys" />
        <PosFeatures data={dataContent}></PosFeatures>
      </Layout>
    </div>
  )
}
