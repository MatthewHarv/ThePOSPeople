import React, { Component } from "react"
import Softwareproducts from "./software/softwaretoggle"
import Hardwareproducts from "./hardware/hardwaretoggle"
import Supportproducts from "./support/supporttoggle"
import Saleproducts from "./sales/salestoggle"
import * as style from "../css/button.module.scss"
import cx from "classnames"
export default class LoginToggle extends Component {
  state = {
    links: [
      {
        id: 0,
        text: "Sales",
        open: false,
        css: cx(["btn btn-lg"], style.inactivebutton),
      },
      {
        id: 1,
        text: "Software",
        open: false,
        css: cx(["btn btn-lg"], style.inactivebutton),
      },
      {
        id: 2,
        text: "Hardware",
        open: false,
        css: cx(["btn btn-lg"], style.inactivebutton),
      },
      {
        id: 3,
        text: "Support",
        open: false,
        css: cx(["btn btn-lg"], style.inactivebutton),
      },
    ],
  }

  togglerfunction = (param) => {
    for (var i = 0; i < this.state.links.length; i++) {
      if (param === this.state.links[i].id) {
        if (this.state.links[i].open) {
          let slicer = this.state.links.slice()
          slicer[i].open = false
          slicer[i].css = cx(["btn btn-lg"], style.inactivebutton)
          this.setState({ arr: slicer })
        } else {
          let slicer = this.state.links.slice()
          slicer[i].open = true
          slicer[i].css = cx(["btn btn-lg"], style.activebutton)
          this.setState({ arr: slicer })
        }
      } else {
        let slicer = this.state.links.slice()
        slicer[i].open = false
        slicer[i].css = cx(["btn btn-lg"], style.inactivebutton)
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
          {this.state.links[0].open && (
            <div className={cx(["boxContent"], style.gap)}>
              <Saleproducts></Saleproducts>
            </div>
          )}
          {this.state.links[1].open && (
            <div className={cx(["boxContent"], style.gap)}>
              <Softwareproducts></Softwareproducts>
            </div>
          )}
          {this.state.links[2].open && (
            <div className={cx(["boxContent"], style.gap)}>
              <Hardwareproducts></Hardwareproducts>
            </div>
          )}
          {this.state.links[3].open && (
            <div className={cx(["boxContent"], style.gap)}>
              <Supportproducts></Supportproducts>
            </div>
          )}
        </div>
      </div>
    )
  }
}
