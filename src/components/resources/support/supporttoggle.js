import React, { Component } from "react"
import ResourceConstructor from "../resourceconstructor"
import * as style from "../../css/login.module.scss"
const thetitle = "Support"

export default class SupportToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          header: "Troubleshooting",
          description: "General troubleshooting for software and hardware",
          link: "https://drive.google.com/file/d/1vFPD0O57nVmQdjKHDEN1vk-5JdoFFqkz/preview",
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
