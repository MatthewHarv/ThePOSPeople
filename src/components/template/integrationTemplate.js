import React, { Component } from "react"
import * as style from "../../components/css/integration.module.scss"
import cx from "classnames"

export default class integrationTemplate extends Component {
  state = {
    filter: "All Categories",
    collapse: false,
    css: cx([""], style.collapsedcat),
    cssoptions: cx([""], style.collapsedcatoptions),
  }

  togglerfunction = (param) => {
    this.setState({ filter: param })
  }

  cattoggleOn = (param) => {
    if (param === cx([""], style.collapsedcat)) {
      this.setState({ css: cx([""], style.expandeddcat) })
      this.setState({
        cssoptions: cx([""], style.expandeddcatoptions),
      })
    }
  }
  cattoggleOff = (param) => {
    if (param === cx([""], style.expandeddcat)) {
      this.setState({ css: cx([""], style.collapsedcat) })
      this.setState({
        cssoptions: cx([""], style.collapsedcatoptions),
      })
    }
  }

  cattoggle = (param) => {
    if (param === cx([""], style.expandeddcat)) {
      this.setState({ css: cx([""], style.collapsedcat) })
      this.setState({
        cssoptions: cx([""], style.collapsedcatoptions),
      })
    } else {
      this.setState({ css: cx([""], style.expandeddcat) })
      this.setState({
        cssoptions: cx([""], style.expandeddcatoptions),
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className={style.filterContainer}>
            Filter by :{" "}
            <span>
              <div
                className={this.state.css}
                onClick={() => this.cattoggle(this.state.css)}
                onMouseEnter={() => this.cattoggleOn(this.state.css)}
                onMouseLeave={() => this.cattoggleOff(this.state.css)}
                onKeyDown={() => this.cattoggle(this.state.css)}
                role="button"
                tabIndex={0}
              >
                <button>{this.state.filter}</button>
                <div>
                  <button
                    className={this.state.cssoptions}
                    onClick={() => this.togglerfunction("All Categories")}
                  >
                    All Categories
                  </button>
                  <button
                    className={this.state.cssoptions}
                    onClick={() => this.togglerfunction("Accounting")}
                  >
                    Accounting
                  </button>
                  <button
                    className={this.state.cssoptions}
                    onClick={() => this.togglerfunction("Online Ordering")}
                  >
                    Online Ordering
                  </button>
                  <button
                    className={this.state.cssoptions}
                    onClick={() => this.togglerfunction("PMS")}
                  >
                    PMS
                  </button>
                </div>
              </div>
            </span>
          </div>

          {/*           */}
          <div className={cx(["row"], style.cardRow)}>
            {this.props.data
              .filter(
                (rawdata) =>
                  rawdata.category === this.state.filter ||
                  this.state.filter === "All Categories"
              )
              .map((link) => {
                return (
                  <div
                    key={link.id}
                    className={cx(["card col-md-4"], style.cardContainer)}
                  >
                    <div className="card-body text-center ">
                      <div className={style.cardImage}>{link.image}</div>
                      <p className={style.cardDescription}>
                        {link.description}
                      </p>
                      <p className={style.cardDescription}>
                        {link.secondarydescription}
                      </p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}
