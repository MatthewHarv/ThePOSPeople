import React from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import ContactButton from "../components/template/contactButton"
import Bluetext from "../components/template/bluetext"
import * as style from "../components/css/support.module.scss"
import cx from "classnames"
import { StaticImage } from "gatsby-plugin-image"
import Silverstar from "../images/Support/thesilverstar.png"
import Goldstar from "../images/Support/thegoldstar.png"
import Platstar from "../images/Support/theplatinumstar.png"

const titleInner = "Support"

const textInner = (
  <>
    The hospitality and retail industry doesn’t work 9am to 5pm, so neither do
    we, <strong>The POS People's </strong> Point of Sale Support staff work
    around the clock to make sure your POS system is always running smoothly.
    Our POS System Support calls are answered 24 hours a day, 7 days a week, 365
    days a year, so no matter when you need us, we’ll be there.
    <br></br>
    <br></br>
    If you require customer support please call:
    <br></br>09 444 3903&nbsp;&nbsp;&nbsp;0800 767 100&nbsp;&nbsp;&nbsp;0800 POS
    100
    <br></br>support@thepospeople.co.nz
  </>
)
const Retail = () => (
  <Layout>
    <Seo title="Support" />
    <StaticImage
      className={cx(["img-fluid"], style.supportcover)}
      src="../images/Support/support.jpg"
      alt="news"
      formats={["AUTO", "WEBP"]}
      layout="fullWidth"
    />
    <Bluetext textInner={textInner} titleInner={titleInner}></Bluetext>
    <div className={style.supportcontainer}>
      <h2 className={style.supportHeader}>Your Support Options</h2>
      <h6 className={style.supportLead}>
        With The POS People's POS System, you choose the level of support that
        works for you.
      </h6>
      <div className={style.cardBackground}>
        <div className={cx(["row padding"])}>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.cardcontainer}>
              <div className="card-body">
                <img className={style.star} src={Silverstar} alt="star"></img>
                <h5 className={cx(["card-title"], style.cardtitle)}>
                  Silver Support
                </h5>

                <p className={cx(["card-text"], style.cardtext)}>
                  Email software support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Software upgrades
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 remote software support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 remote hardware support (charges apply)
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 onsite call outs (charges apply)
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Loan equipment (charges apply)
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Return to base warranty
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.cardcontainer}>
              <div className="card-body">
                <img className={style.star} src={Goldstar} alt="star"></img>
                <h5 className={cx(["card-title"], style.cardtitle)}>
                  Gold Support
                </h5>
                <p className={cx(["card-text"], style.cardtext)}>
                  Email software support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Software upgrades
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 remote software support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 remote hardware support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 onsite call outs (charges apply)
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Loan equipment (charges apply)
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Return to base warranty
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className={style.cardcontainer}>
              <div className="card-body">
                <img className={style.star} src={Platstar} alt="star"></img>
                <h5 className={cx(["card-title"], style.cardtitle)}>
                  Platinum Support
                </h5>
                <p className={cx(["card-text"], style.cardtext)}>
                  Email software support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Software upgrades
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 remote software support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 remote hardware support
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  24/7 onsite call outs
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Loan equipment
                </p>
                <p className={cx(["card-text"], style.cardtext)}>
                  Onsite warranty
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.ContactButton}>
          <ContactButton></ContactButton>
        </div>
      </div>
    </div>
  </Layout>
)

export default Retail
