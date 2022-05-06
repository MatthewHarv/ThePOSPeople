import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import Sidemenu from "../components/template/sidemenu"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/sites.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
export default class hotel extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Seo title="Hotel" />
            <div className={style.siteContainer}>
              <div className="offset">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 text-center">
                      <h1 className={style.header}>Hotels</h1>
                      <div className={style.imageContainer}>
                        <StaticImage
                          className={cx([""], style.siteimage)}
                          src="../images/Sites/hotel.jpeg"
                          alt="Hotel"
                          formats={["AUTO", "WEBP"]}
                        />
                      </div>
                      <p className={style.description}>
                        The POS People is suitable whether you are a small
                        country Hotel with 10 rooms or are a large city Hotel
                        with 500 rooms. We can scale to meet your needs. Our POS
                        systems integrate with many property management systems,
                        allowing your customers to charge back to their rooms
                        paying as they check out.
                      </p>
                      <p className={style.enddescription}>
                        So if you need a POS system for your Hotel call us to
                        discuss.
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
