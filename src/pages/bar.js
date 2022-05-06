import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import Sidemenu from "../components/template/sidemenu"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/sites.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
export default class Bars extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Seo title="Bars" />
            <div className={style.siteContainer}>
              <div className="offset">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 text-center">
                      <h1 className={style.header}>Bars</h1>
                      <div className={style.imageContainer}>
                        <StaticImage
                          className={cx([""], style.siteimage)}
                          src="../images/Sites/bar2.jpeg"
                          alt="Bars"
                          formats={["AUTO", "WEBP"]}
                        />
                      </div>
                      <p className={style.description}>
                        The POS People’s POS system key fundamentals are speed
                        and efficiency, the base requirement for any busy Bar.
                        Our system is not only fast and quick but also has a
                        user-friendly interface allowing you to create the flow
                        of service as you need. In addition, our stock control
                        is a vital part of our system that enables you to manage
                        your stock holdings with ease.
                      </p>
                      <p className={style.enddescription}>
                        Call us today to discuss the needs you have for your
                        bar.
                      </p>
                    </div>
                    <Sidemenu></Sidemenu>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <ContactButton></ContactButton>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    )
  }
}
