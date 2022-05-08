import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import ContactButton from "../components/template/contactButton"
import * as style from "../components/css/products.module.scss"
import { Link } from "gatsby"

import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <Seo title="Products" />
        <StaticImage
          className={cx(["img-fluid"], style.productcover)}
          src="../images/Store/theprinter.jpg"
          alt="news"
          formats={["AUTO", "WEBP"]}
          layout="fullWidth"
        />
        <div className={style.background}>
          <div className={style.productcontainer}>
            <h1 className={style.header}>Products </h1>

            <div className={style.subheader}>Software </div>
            <div className={cx(["text-center"], style.logorow)}>
              <div className={cx(["row"])}>
                <div className="col">
                  <Link to={"/tevalis"}>
                    <StaticImage
                      className={cx([""], style.poslogo)}
                      src="../images/PosSolutions/Tevalis/TevalisLogo.png"
                      alt="Tevalis"
                      formats={["AUTO", "WEBP"]}
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link to={"/ramsys"}>
                    <StaticImage
                      className={cx([""], style.poslogo)}
                      src="../images/PosSolutions/Ramsys/ramsyslogo.png"
                      alt="Ramsys"
                      formats={["AUTO", "WEBP"]}
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link to={"/idealpos"}>
                    <StaticImage
                      className={cx([""], style.poslogo)}
                      src="../images/PosSolutions/Idealpos/idealpos.jpg"
                      alt="IdealPOS"
                      formats={["AUTO", "WEBP"]}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className={style.subheader}>Hardware</div>
            <p className={style.disclaimer}>
              These images do not dictate what stock we have on hand or carry at
              the time, please check with our sales team on
              sales@thepospeople.co.nz or 09 444 3903&nbsp;&nbsp;&nbsp;0800 767
              100&nbsp;&nbsp;&nbsp;0800 POS 100
            </p>
            <div className={cx(["text-center"], style.logorow)}>
              <div className={cx(["row"])}>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/fec.jpg"
                    alt="Fec"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Point of sale</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/element.jpg"
                    alt="Element"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Point of sale</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/tab.jpg"
                    alt="Tablet"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Tablets</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/receiptprinter.jpg"
                    alt="receipt printer"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Thermal Printers</div>
                </div>

                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/kitchenprinter.jpg"
                    alt="kitchenprinter"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Kitchen Printers</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/cashdraw.jpg"
                    alt="cashdraw"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Cash Draw</div>
                </div>

                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/boxscanner.jpg"
                    alt="Box scanner"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Box Scanners</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/barcodescanner.jpg"
                    alt="barcode scanner"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Barcode Scanners</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/handheld.jpg"
                    alt="handheld"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Handheld Device</div>
                </div>
              </div>
            </div>

            <div className={style.subheader}>Consumables</div>
            <div className={cx(["text-center"], style.logorow)}>
              <div className={cx(["row"])}>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/thermalpaper.jpg"
                    alt="Fec"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Thermal Paper</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/1plykitchenpaper.jpg"
                    alt="Element"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>1 Ply Kitchen Paper</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/2plykitchenpaper.jpg"
                    alt="Tablet"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>2 Ply Kitchen Paper</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/3plykitchenpaper.jpg"
                    alt="IdealPOS"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>3 Ply Kitchen Paper</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/eftpospaper.jpg"
                    alt="IdealPOS"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>Eftpos Paper</div>
                </div>
                <div className="col">
                  <StaticImage
                    className={cx([""], style.logo)}
                    src="../images/Store/blackredribbon.jpg"
                    alt="IdealPOS"
                    formats={["AUTO", "WEBP"]}
                  />
                  <div className={style.description}>
                    Black/Red Printer Ribbons
                  </div>
                </div>
              </div>
            </div>
            <div className={style.contact}>
              <h3>Contact us for info</h3>
              <ContactButton></ContactButton>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
