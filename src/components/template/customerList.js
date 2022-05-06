import React, { Component } from "react"
import * as style from "../css/customer.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import cx from "classnames"

export default class CustomerList extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Some of our customers</h2>
        <div className="container">
          <div className="row">
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://cablebay.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/cable.jpg"
                  alt="cable"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://theconservatory.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/conservatory.jpg"
                  alt="theconservatory"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.marsdenestate.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/marsden.jpg"
                  alt="marsdenestate"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.stonyridge.com/homepage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/stonyridge.jpg"
                  alt="stonyridge"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.alturacoffee.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/altura.jpg"
                  alt="alturacoffee"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://puhoivalley.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/puhoi.jpg"
                  alt="puhoivalley"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://zanegreys.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/zane.png"
                  alt="zanegreys"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.alexandrapark.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/alexandra.jpg"
                  alt="alexandrapark"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.brickbay.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/brick.jpg"
                  alt="brickbay"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.aucklandmuseum.com/visit/plan-your-visit/food-and-drink/tuitui-museum-bistro-cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/tuitui.jpg"
                  alt="tuitui"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://calendargirls.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/calendar.jpg"
                  alt="calendar girls"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="http://www.amoaresort.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/amoa.jpg"
                  alt="amoaresort"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://barriobrothers.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/barrio.jpg"
                  alt="barriobrothers"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.tenku.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/tenku.jpg"
                  alt="tenku"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.castaways.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/castaway.jpg"
                  alt="castaways"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.fphcare.com/nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/fisher.jpg"
                  alt="fphcare"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.gengys.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/gengy.jpg"
                  alt="gengys"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://goodlocal.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/goodlocal.jpg"
                  alt="goodlocal"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.thegrangetakapuna.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/grange.jpg"
                  alt="thegrangetakapuna"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.facebook.com/thehophousenz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/hophouse.jpg"
                  alt="hophouse"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.missgees.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/missgee.jpg"
                  alt="missgee"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.facebook.com/SOBARROTORUA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/sobar.jpg"
                  alt="sobar"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="http://saletogasands.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/saletoga.jpg"
                  alt="saletoga"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.thejefferson.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/jefferson.jpg"
                  alt="jefferson"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.jinjin.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/jinjin.jpg"
                  alt="jinjin"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="http://barrelroom.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/barrelroom.jpg"
                  alt="barrelroom"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.brooklynpatio.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/brooklyn.jpg"
                  alt="brooklyn"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.thecladdagh.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/claddagh.jpg"
                  alt="thecladdagh"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.hellosushinz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/hellosushi.jpg"
                  alt="Customers"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.jollygoodfellows.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/jollygood.jpg"
                  alt="jollygood"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.sugosugo.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/sugo.jpg"
                  alt="Sugo"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.dantes.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/dantes.jpg"
                  alt="dantes"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.mexicancafe.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/mexican.jpg"
                  alt="mexican"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://shakespeare.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/shakespeare.jpg"
                  alt="shakespeare"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.urbansoul.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/urbansoul.jpg"
                  alt="urbansoul"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="http://www.whitehousetepuna.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/whitehouse.jpg"
                  alt="whitehouse"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://littlehavana.kiwi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/havana.jpg"
                  alt="havana"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.yacht.org.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/yacht.jpg"
                  alt="yacht"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://zealong.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/zealong.jpg"
                  alt="zealong"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.beachlandsclub.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/beachlands.jpg"
                  alt="beachlands"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>

            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="http://www.flyingburritobrothers.co.nz/hamilton.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/flying.jpg"
                  alt="flying"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.besoslatinos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/besos.jpg"
                  alt="besos"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.goodhomepukekohe.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/goodpuk.jpg"
                  alt="goodpuk"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.facebook.com/JamOrganicCafe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/jam.jpg"
                  alt="jam"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.fireatthemount.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/fire.jpg"
                  alt="fireatthemount"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.dunemangawhai.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/dune.jpg"
                  alt="dunemangawhai"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.goingloco.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/loco.jpg"
                  alt="loco"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
            {/* Card */}
            <div
              className={cx(["col-6 col-sm-4 col-md-2"], style.customerImage)}
            >
              <a
                href="https://www.no8mount.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  className={cx([""], style.frontimage)}
                  src="../../images/Customers/number8.jpg"
                  alt="number8"
                  formats={["AUTO", "WEBP"]}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
