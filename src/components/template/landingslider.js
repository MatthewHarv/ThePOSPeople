import React, { Component } from "react"
import BarLanding from "../gatsbyimages/barlanding"
import Retaillanding from "../gatsbyimages/retaillanding"
import Eftposlanding from "../gatsbyimages/eftposlanding"
import Cafelanding from "../gatsbyimages/cafelanding"
import Carousel from "react-bootstrap/Carousel"
import { Link } from "gatsby"
import * as style from "../css/integrationslider.module.scss"
import Venue from "../template/venuelogo"
import cx from "classnames"

export default class landingslider extends Component {
  render() {
    return (
      <div>
        <Carousel pause={false} fade={true} nextLabel={""} prevLabel={""}>
          <Carousel.Item className={style.carouselItem}>
            <BarLanding></BarLanding>
            <Carousel.Caption>
              <h3 className={style.carouselHeaderEntry}>
                For Table self-service QR code &amp; online ordering. Contact
                our team or click&nbsp;
                <span>
                  <Link className={style.intlink} to="/integrations">
                    here
                  </Link>
                </span>
                &nbsp;for more information
              </h3>
              <h3 className={style.carouselHeader}>
                Point Of Sale systems for Hospitality
              </h3>
              <div>
                <Link
                  className={cx(["btn btn-primary btn-lg"], style.button)}
                  to="/hospitality"
                >
                  Learn More
                </Link>
              </div>
              <div>
                <Venue></Venue>
              </div>
            </Carousel.Caption>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.carouselItem}>
            <Retaillanding></Retaillanding>
            <Carousel.Caption>
              <h3 className={style.carouselHeader}>
                Point Of Sale systems for Retail
              </h3>
              <div>
                <Link
                  type="button"
                  className={cx(["btn btn-primary btn-lg"], style.button)}
                  to="/retail"
                >
                  Learn More
                </Link>
              </div>
              <div>
                <Venue></Venue>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.carouselItem}>
            <Eftposlanding></Eftposlanding>
            <Carousel.Caption>
              <h3 className={style.carouselHeader}>Extensive Integrations</h3>
              <div>
                <Link
                  type="button"
                  className={cx(["btn btn-primary btn-lg"], style.button)}
                  to="/integrations"
                >
                  Learn More
                </Link>
              </div>
              <div>
                <Venue></Venue>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.carouselItem}>
            <Cafelanding></Cafelanding>
            <Carousel.Caption>
              <h3 className={style.carouselHeader}>
                Point Of Sale systems for Cafes
              </h3>
              <div>
                <Link
                  type="button"
                  className={cx(["btn btn-primary btn-lg"], style.button)}
                  to="/cafe"
                >
                  Learn More
                </Link>
              </div>
              <div>
                <Venue></Venue>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className={style.outtercap}>
          <div className={style.intocap}>
            We sell and supply Tevalis, Ramsys and Idealpos point of sale!
          </div>
        </div>
      </div>
    )
  }
}
