import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import Sidemenu from "../components/template/sidemenu"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/sites.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
export default class Cafe extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Seo title="Cafe" />
            <div className={style.siteContainer}>
              <div className="offset">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 text-center">
                      <h1 className={style.header}>Cafes</h1>
                      <div className={style.imageContainer}>
                        <StaticImage
                          className={cx([""], style.siteimage)}
                          src="../images/Sites/cafetable.jpg"
                          alt="Cafe"
                          formats={["AUTO", "WEBP"]}
                        />
                      </div>
                      <p className={style.description}>
                        Our POS systems offerings are feature rich for the café
                        industry. Our implementation programming staff are
                        experienced in helping you set up your system in such a
                        way as to maintain tight financial controls in your
                        business, as well as helping the business to maximise
                        sales during peak times with efficient processing of
                        transactions
                      </p>
                      <p className={style.enddescription}>
                        If you want to improve your cafe we are here to help!
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
