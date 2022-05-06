import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import Sidemenu from "../components/template/sidemenu"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/sites.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
export default class Restaurants extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Seo title="Restaurants" />
            <div className={style.siteContainer}>
              <div className="offset">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 text-center">
                      <h1 className={style.header}>Restaurants</h1>
                      <div className={style.imageContainer}>
                        <StaticImage
                          className={cx([""], style.siteimage)}
                          src="../images/Sites/restaurant.jpeg"
                          alt="Restaurants"
                          formats={["AUTO", "WEBP"]}
                        />
                      </div>
                      <p className={style.description}>
                        The POS People’s POS systems are specifically designed
                        for the hospitality industry with appropriate features
                        and functions for your restaurant. Mobile devices are
                        available to ensure waiter staff spend as much time on
                        the floor as possible, increasing sales, but more
                        importantly attending to customer needs. Our back of
                        house software provided in depth analyses to help drive
                        your business.
                      </p>
                      <p className={style.enddescription}>
                        Call us today to discuss the needs you have for your
                        restaurant.
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
