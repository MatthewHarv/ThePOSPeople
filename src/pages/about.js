import React from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import * as style from "../components/css/about.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
import BlueText from "../components/template/bluetext"
const titleInner = "About Us"

const textInner = (
  <>
    <strong>The POS People</strong> (previously known as Hospitality Management
    Systems Limited 2008) is a locally owned company owned and operated by
    Husband and Wife team Shane &amp; Michelle Stent, with an office in Auckland
    and a satellite office in Tauranga providing Point of Sale solutions in New
    Zealand and The Pacific Islands. Our passion is to work with our customers
    to provide the very best solution that enables them to be able to manage
    their business efficiently using the resources a quality POS system can
    provide. Our focus and mantra is to find a solution that fits the customer
    needs and go the extra mile for our customers who we see are part of The POS
    People family.
  </>
)
const AboutUs = () => (
  <Layout>
    <Seo title="About" />
    <div className="offset">
      <div className="padding text-center">
        <StaticImage
          className={cx(["img-fluid"], style.aboutHeadImg)}
          src="../images/Sites/people.jpeg"
          alt="posabout"
          formats={["AUTO", "WEBP"]}
          layout="fullWidth"
        />
        <BlueText titleInner={titleInner} textInner={textInner}></BlueText>

        <div className={cx(["container-fluid padding"], style.aboutContainer)}>
          <div className="row text-center padding">
            <div className="col-md-6 col-sm-12">
              <StaticImage
                className={cx(["img-fluid"], style.aboutimg)}
                src="../images/TPPLogo/posabout.jpg"
                alt="posabout"
                formats={["AUTO", "WEBP"]}
              />
            </div>

            <div className="col-md-6 col-sm-12">
              <p className={style.description}>
                We work with some of the top Point of Sale brands available in
                the New Zealand market and matched with over a decade of our
                knowledge of Point of Sale and Retail &amp; Hospitality service
                we know how to help and support businesses in today's market
                with their needs.{" "}
              </p>
              <p className={style.description}>
                The software solutions we provide are fully editable and
                adjustable to meet the needs of your business. Our systems come
                will full training and implementation and once installed we have
                an experienced team providing you ongoing 24/7 support and
                assistance.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutUs
