import React from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import { StaticImage } from "gatsby-plugin-image"

import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/retail.module.scss"

import cx from "classnames"
const Retail = () => (
  <Layout>
    <Seo title="Retail" />
    <div className={style.retailcontainer}>
      <div className="padding text-center">
        <h1 className={cx(["text-center"], style.header)}>Retail</h1>
        <div>
          <StaticImage
            className={cx([""], style.retailimg)}
            src="../images/Sites/retail3.jpg"
            alt="Retail"
            formats={["AUTO", "WEBP"]}
          />
        </div>
        <p className={style.description}>
          Whether you are a single store or a chain of 200 stores, a bookstore
          or dress store, The POS People have the solution for you. Our retail
          offering has been developed since 1993 initially for a multinational
          chain so suitable for all applications. Reporting can be local or in
          the cloud, single store or centralised reporting for a group. The
          options are wide and varied and can be accommodated to meet all needs
          and applications.
        </p>
        <p className={style.enddescription}>
          Call us today to discuss the needs you have for your retail outlet.
        </p>

        <ContactButton></ContactButton>
      </div>
    </div>
  </Layout>
)

export default Retail
