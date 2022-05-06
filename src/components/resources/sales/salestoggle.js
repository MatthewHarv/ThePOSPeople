import React, { Component } from "react"
import ResourceConstructor from "../resourceconstructor"
import * as style from "../../css/login.module.scss"
const thetitle = "Sale"

export default class SaleToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          header: "Sales FAQ",
          description: "General sales FAQ",
          link: "https://drive.google.com/file/d/1RFq-4r2TyirYVxrYsFF1zxDIw4iLH1sr/preview",
          showhide: style.popdown,
        },
        {
          id: 1,
          header: "Demo Evaluation",
          description: "Salse Demo Evaluation",
          link: "https://drive.google.com/file/d/1_THZ-I0hLw_xeVw1iaPnTmqswl77bD97/preview",
          showhide: style.popdown,
        },
        {
          id: 2,
          header: "Detailed Integration",
          description: "Differences between POS integrations",
          link: "https://drive.google.com/file/d/1Vc-CwbReGzBwi78mB8z7AyZhsfbOVjg3/preview",
          showhide: style.popdown,
        },
        {
          id: 3,
          header: "Hardware Information",
          description: "Contains specs and details of hardware sold",
          link: "https://drive.google.com/file/d/1Gtr8wo6ocvfcvv3hUBgnv7LD2mvbC7Tz/preview",
          showhide: style.popdown,
        },
      ],
    }
  }

  handleToUpdate(index) {
    let slicer = this.state.data.slice()
    slicer[index].open = !slicer[index].open
    if (slicer[index].showhide === style.popup) {
      slicer[index].showhide = style.popdown
    } else {
      slicer[index].showhide = style.popup
    }

    this.setState({ arr: slicer })
  }

  render() {
    var handleToUpdate = this.handleToUpdate
    return (
      <div>
        <ResourceConstructor
          handleToUpdate={handleToUpdate.bind(this)}
          title={thetitle}
          data={this.state.data}
        ></ResourceConstructor>
      </div>
    )
  }
}
