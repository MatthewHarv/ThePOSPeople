import React, { Component } from "react"
import RamsysToggle from "./ramsys/ramsystoggle"
import IdealposToggle from "./idealpos/idealpostoggle"
import * as style from "../../css/button.module.scss"
import cx from "classnames"
export default class LoginToggle extends Component {
  state = {
    links: [
      {
        id: 0,
        text: "Ramsys",
        open: false,
        css: cx(["btn btn-lg"], style.inactivebuttonblue),
      },
      {
        id: 1,
        text: "Idealpos",
        open: false,
        css: cx(["btn btn-lg"], style.inactivebuttonblue),
      },
    ],
  }

  togglerfunction = (param) => {
    for (var i = 0; i < this.state.links.length; i++) {
      if (param === this.state.links[i].id) {
        if (this.state.links[i].open) {
          let slicer = this.state.links.slice()
          slicer[i].open = false
          slicer[i].css = cx(["btn btn-lg"], style.inactivebuttonblue)
          this.setState({ arr: slicer })
        } else {
          let slicer = this.state.links.slice()
          slicer[i].open = true
          slicer[i].css = cx(["btn btn-lg"], style.activebuttonblue)
          this.setState({ arr: slicer })
        }
      } else {
        let slicer = this.state.links.slice()
        slicer[i].open = false
        slicer[i].css = cx(["btn btn-lg"], style.inactivebuttonblue)
        this.setState({ arr: slicer })
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.state.links.map((link) => {
              return (
                <div key={link.id} className="col-12 col-sm-6 col-md-3">
                  <button
                    type="button"
                    className={this.state.links[link.id].css}
                    onClick={() => this.togglerfunction(link.id)}
                  >
                    {link.text}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          {this.state.links[1].open && (
            <div className={cx(["boxContent"], style.gap)}>
              <RamsysToggle></RamsysToggle>
            </div>
          )}
          {this.state.links[2].open && (
            <div className={cx(["boxContent"], style.gap)}>
              <IdealposToggle></IdealposToggle>
            </div>
          )}
        </div>
      </div>
    )
  }
}
