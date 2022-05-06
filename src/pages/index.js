import React from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"

import Landingslider from "../components/template/landingslider"
import Bluetext from "../components/template/bluetext"
import { useStaticQuery, graphql } from "gatsby"
import * as style from "../components/css/index.module.scss"
import cx from "classnames"

import { FaDolly, FaUserGraduate, FaTools, FaCheck } from "react-icons/fa"
import Customerlist from "../components/template/customerList"
import POSProducts from "../components/template/posSoftware"
import IntegrationSlider from "../components/template/integrationslider"
import { StaticImage } from "gatsby-plugin-image"
const headerInner = "What we do"
const titleInner = "Your Point Of Sale Specialists"

const textInner = (
  <>
    Here at <strong>The POS People</strong> we specialize in the sale and
    support of Point Of Sale Software Solutions, Hardware, Consumables &amp;
    Eftpos for the <strong>Hospitality &amp; Retail Market. </strong>
    We implement, install, train and offer exceptional customer service.
    <br></br>
    <br></br>
    <strong>The POS People </strong> are Point Of Sale Specialists working with
    leading software brands with a variety of Point Of Sale solutions each with
    their own strengths and specialities, so we can give our customers the best
    system for their needs.
    <br></br>
    <br></br>
    Our team work's alongside you every step of the way and building a friendly
    and supportive on-going relationship means we get to share our passion and
    knowledge to help your business prosper.
    <br></br>
    <br></br>
    <strong>The POS People</strong> are passionate about service and we
    understand how important it is to have help and assistance when you need it.
    We offer 24/7 support access so we can provide the very best service to your
    staff and business.
  </>
)

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
        }
      }
    }
  `)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The POS People",
    description: site.siteMetadata.description,
    url: site.siteMetadata.siteUrl,
    logo: "https://i.imgur.com/0PtXcRQ.png",
    sameAs: [
      "https://www.facebook.com/thepospeoplenz",
      "https://www.instagram.com/the_pos_people/",
      "https://www.linkedin.com/company/the-pos-people/",
    ],
  }
  return (
    <Layout>
      <Seo title="Home" schemaMarkup={schema} />
      {/* Image slider */}
      <Landingslider></Landingslider>
      <Bluetext
        headerInner={headerInner}
        textInner={textInner}
        titleInner={titleInner}
      ></Bluetext>

      {/* 4 column section */}
      <div className={cx(["container-fluid padding"], style.featureSection)}>
        <div className="row text-center padding">
          <div className="col-12 col-md-6 col-lg-3 ">
            <i className={style.install}>
              <FaDolly className={style.whatwedologo} />
            </i>
            <h5 className={style.venutitle}>Install</h5>
            <p className={style.venutext}>
              We install POS systems on site to get you up and running
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <i className={style.train}>
              <FaUserGraduate className={style.whatwedologo} />
            </i>
            <h5 className={style.venutitle}>Train</h5>
            <p className={style.venutext}>
              We train you and your staff to perform the best!
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <i className={style.repair}>
              <FaTools className={style.whatwedologo} />
            </i>
            <h5 className={style.venutitle}>Repair</h5>
            <p className={style.venutext}>
              We repair hardware such as printers and Point Of Sale systems
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <i>
              <StaticImage
                className={style.supportlogo}
                src="../images/TPPLogo/Support.png"
                alt="Support"
                formats={["AUTO", "WEBP"]}
              />
            </i>

            <h5 className={style.venutitle}>24/7 Support and Maintenance</h5>
            <p className={style.venutext}>
              Always available to help keep your site up and running!
            </p>
          </div>
        </div>
      </div>

      <div className={style.tickContainer}>
        <div className="row">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <ul className="list-unstyled">
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Stock/Inventory Control</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Stock Management</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Accounting Integrations</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Online Ordering</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>
                  Comprehensive forecasting
                </span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <ul className="list-unstyled">
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Loyalty Programs</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>
                  Hardware Sales &amp; Service
                </span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Eftpos Integration</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Product Scanning</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Gift Card Management</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <ul className="list-unstyled">
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>
                  Local &amp; Cloud Reporting
                </span>
              </li>

              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Cloud backups</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Network Infrastructure</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>Intelligence Reporting</span>
              </li>
              <li>
                <i className={cx(["fas fa-tick"], style.tick)}>
                  <FaCheck />
                </i>
                <span className={style.ticktext}>CRM Integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <POSProducts></POSProducts>
      <IntegrationSlider></IntegrationSlider>

      <Customerlist></Customerlist>

      <div className={style.parallax}>
        <div className={style.supportcontent}>
          <h3 className={style.supporthead}>24/7 Support</h3>
          <p className={style.psupport}>
            Hospitality and Retail never sleep, and neither do we!
          </p>
          <p className={style.psupport}>
            We provide our customers with around the clock support to keep your
            business running no matter the situation
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
