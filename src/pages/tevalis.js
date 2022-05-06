import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import { getImage } from "gatsby-plugin-image"
import PosFeatures from "../components/template/posFeatures"

export default function Cover() {
  const { tevalisCover, onlineImage, handheldImage, tableOrderImage } =
    useStaticQuery(
      graphql`
        query {
          tevalisCover: file(
            relativePath: { eq: "PosSolutions/Tevalis/tevaliscover.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                quality: 80
                formats: [AUTO, AVIF]
                placeholder: BLURRED
              )
            }
          }
          onlineImage: file(
            relativePath: { eq: "PosSolutions/Tevalis/onlineorder.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                quality: 80
                formats: [AUTO, AVIF]
                placeholder: BLURRED
              )
            }
          }
          handheldImage: file(
            relativePath: { eq: "PosSolutions/Tevalis/tablet.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                quality: 80
                formats: [AUTO, AVIF]
                placeholder: BLURRED
              )
            }
          }
          tableOrderImage: file(
            relativePath: { eq: "PosSolutions/Tevalis/tableorder.png" }
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
  const coverImage = getImage(tevalisCover)
  const handheld = getImage(handheldImage)
  const online = getImage(onlineImage)
  const table = getImage(tableOrderImage)

  const dataContent = {
    title: "Tevalis",
    coverimage: coverImage,
    leadtitle: "Industry Leading Point Of Sale",
    leaddescription:
      "Tevalis is an industry leading technology solutions provider to the hospitality, leisure and gaming industries, with over 1600 sites and 7500+ Epos technology systems",
    secondarydescription:
      "The flexibility of Tevalis software sees our Epos systems being used successfully by fine and casual dining restaurants, bistros, bars, nightclubs, theatres, stadia, hotels, casinos, events and catering, retail and fast service outlets.",
    features: [
      {
        id: 0,
        title: "Clean Design",
        featureDescription:
          "Tevalis provides a digital solution to put tools in the hands of restaurant staff to provide fast and efficent service, take orders that are immediately sent to the point of sale and printers. Also allowed staff to take payment",
        image: handheld,
      },
      {
        id: 1,
        title: "Online Integrations",
        featureDescription:
          "Tevalis integrates with all the well known online ordering third parties, maximising your business's profits.",
        image: online,
      },
      {
        id: 2,
        title: "Table Ordering",
        featureDescription:
          "Contactless table ordering is more important than ever. Guests can use the qr code placed at your table to immediately have the menu pulled up on their device for ordering.",
        image: table,
      },
    ],
  }

  return (
    <div>
      <Layout>
        <Seo title="Tevalis" />
        <PosFeatures data={dataContent}></PosFeatures>
      </Layout>
    </div>
  )
}
