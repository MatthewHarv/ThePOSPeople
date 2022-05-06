import React, { Component } from "react"

import * as style from "../../components/css/bluetext.module.scss"
import cx from "classnames"

export default class posTemplate extends Component {
  render() {
    return (
      <div>
        <div className={cx(["text-center"], style.featureSummary)}>
          <div className={cx(["text-center"], style.textInner)}>
            <h1 className={cx(["text-center"], style.titleInner)}>
              {this.props.titleInner}
            </h1>

            <h2 className={cx(["text-center"], style.headerInner)}>
              {this.props.headerInner}
            </h2>
            <p className={cx(style.textp)}> {this.props.textInner}</p>

            <br></br>
          </div>
        </div>
      </div>
    )
  }
}
