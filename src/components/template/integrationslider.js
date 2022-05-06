import React, { Component } from "react"
import * as style from "../css/integrationslider.module.scss"

export default class integrationslider extends Component {
  render() {
    return (
      <div>
        <div className={style.container}>
          <h3 className={style.title}>Partners &amp; Integrations</h3>
          <p className={style.textp}>
            We work with a large number of partners to ensure that we can tailor
            to your specific needs.
          </p>

          <div className={style.wrapper}>
            <div className={style.slidingbackground}></div>
          </div>
        </div>
      </div>
    )
  }
}
