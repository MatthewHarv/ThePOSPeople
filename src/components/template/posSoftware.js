import React, { Component } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../css/posproducts.module.scss"
import { Link } from "gatsby"

import cx from "classnames"

export default class posProducts extends Component {
  render() {
    return (
      <div className={style.productContainer}>
        <div className={cx(["text-center"])}>
          <h3 className={style.title}>Our Products</h3>
          <p className={cx([""], style.textp)}>
            We supply and Support Tevalis, Idealpos and Ramsys Point of Sale
            Software so whatever your needs are, we can provide you with the
            optimal solution.
          </p>
          <div className="row">
            <div className="col">
              <Link to={"/tevalis"}>
                <div>
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../../images/PosSolutions/Tevalis/TevalisLogo.png"
                    alt="Tevalis"
                    formats={["AUTO", "WEBP"]}
                  />
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to={"/ramsys"}>
                <div>
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../../images/PosSolutions/Ramsys/ramsyslogo.png"
                    alt="Ramsys"
                    formats={["AUTO", "WEBP"]}
                  />
                </div>
              </Link>
            </div>

            <div className="col">
              <Link to={"/idealpos"}>
                <div>
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../../images/PosSolutions/Idealpos/idealpos.jpg"
                    alt="Ideapos"
                    formats={["AUTO", "WEBP"]}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
