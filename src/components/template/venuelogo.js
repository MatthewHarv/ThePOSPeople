import React from "react"
import { Link } from "gatsby"

import * as style from "../css/venue.module.scss"
import cx from "classnames"

import {
  FaUtensils,
  FaCoffee,
  FaCocktail,
  FaBed,
  FaShoppingCart,
  FaLandmark,
} from "react-icons/fa"
export default function venuelogo() {
  return (
    <div className={style.outer}>
      <div
        className={cx(["container-fluid padding text-center"], style.container)}
      >
        <div className="row">
          <div className="col-sm-4 col-md-2 p-0 col-4">
            <Link to="/cafe" className={cx([""], style.venuelabel)}>
              <i className={style.facafe}>
                <FaCoffee />
              </i>
              <h5>Cafes</h5>
            </Link>
          </div>
          <div className="col-sm-4 col-md-2 p-0 col-4">
            <Link to="/bar" className={cx([""], style.venuelabel)}>
              <i className={style.fabar}>
                <FaCocktail />
              </i>
              <h5>Bars</h5>
            </Link>
          </div>
          <div className="col-sm-4 col-md-2 p-0 col-4">
            <Link to="/restaurant" className={cx([""], style.venuelabel)}>
              <i className={style.farestaurant}>
                <FaUtensils />
              </i>
              <h5>Restaurants</h5>
            </Link>
          </div>
          <div className="col-sm-4 col-md-2 p-0 col-4">
            <Link to="/retail" className={cx([""], style.venuelabel)}>
              <i className={style.faretail}>
                <FaShoppingCart />
              </i>
              <h5>Retail</h5>
            </Link>
          </div>
          <div className="col-sm-4 col-md-2 p-0 col-4">
            <Link to="/hotel" className={cx([""], style.venuelabel)}>
              <i className={style.fahotel}>
                <FaBed />
              </i>
              <h5>Hotels</h5>
            </Link>
          </div>

          <div className="col-sm-4 col-md-2 p-0 col-4">
            <Link to="/franchise" className={cx([""], style.venuelabel)}>
              <i className={style.fafranchise}>
                <FaLandmark />
              </i>
              <h5>Franchises</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
