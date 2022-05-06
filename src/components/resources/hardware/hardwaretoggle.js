import React, { Component } from "react"
import ResourceConstructor from "../resourceconstructor"
import * as style from "../../css/login.module.scss"
const thetitle = "Hardware"

export default class HardwareToggle extends Component {
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
        {
          id: 0,
          header: "CCTV",
          description: "Installation and configuration of cctv",
          link: "https://drive.google.com/file/d/17GIS0YJt-iHgum43CO8ciCZtlXkNFm9U/preview",
          showhide: style.popdown,
        },
        {
          id: 1,
          header: "NVR Guide",
          description: "NVR User Manual",
          link: "https://drive.google.com/file/d/1dnptgDwHS1qyKqXgnDtWJINwX2YuSpto/preview",
          showhide: style.popdown,
        },
        {
          id: 2,
          header: "Setup Ip Printer",
          description: "Setting up an IP Printer",
          link: "https://drive.google.com/file/d/1wr_FMPEVCOFMbls6SHJAUtCBBUdYD0i6/preview",
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
