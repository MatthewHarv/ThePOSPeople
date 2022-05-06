import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import Sidemenu from "../components/template/sidemenu"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/sites.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
export default class mobile extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Seo title="Mobile" />
            <div className={style.siteContainer}>
              <div className="offset">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 text-center">
                      <h1 className={style.header}>Mobile</h1>
                      <div className={style.imageContainer}>
                        <StaticImage
                          className={cx([""], style.siteimage)}
                          src="../images/Sites/mobile.png"
                          alt="Mobile"
                          formats={["AUTO", "WEBP"]}
                        />
                      </div>
                      <p className={style.description}>
                        With The POS People no business is to small to not have
                        a POS system. With the rise in food trucks and mobile
                        food outlets we have put together systems that suits
                        running a quick and efficient ordering system. You get
                        all the benefits of any size venue however customised to
                        accommodate the smaller space and the need for speed.
                      </p>
                      <p className={style.enddescription}>
                        Call us today to discuss the needs you have for your
                        Mobile business.
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
