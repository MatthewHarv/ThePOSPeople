import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import Sidemenu from "../components/template/sidemenu"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/sites.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
export default class Franchise extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Seo title="Franchise" />
            <div className={style.siteContainer}>
              <div className="offset">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 text-center">
                      <h1 className={style.header}>Franchise</h1>
                      <div className={style.imageContainer}>
                        <StaticImage
                          className={cx([""], style.siteimage)}
                          src="../images/Sites/franchise2.jpg"
                          alt="Franchise"
                          formats={["AUTO", "WEBP"]}
                        />
                      </div>
                      <p className={style.description}>
                        No matter if you are an established or developing
                        franchise, The POS People posses the capabilities to
                        ensure an efficient, professional and smoothly run
                        operation. The POS can provide the key functions to
                        manager a franchise operation needing multisite
                        management. From central reporting and analytical tools
                        to central menu control and group promotions, The POS
                        People can provide it all.
                      </p>
                      <p className={style.enddescription}>
                        Call us today to discuss the needs you have for your
                        franchise
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
