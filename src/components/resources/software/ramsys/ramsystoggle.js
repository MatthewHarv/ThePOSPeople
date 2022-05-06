import React, { Component } from "react"
import ResourceConstructor from "../../resourceconstructor"
import * as style from "../../../css/login.module.scss"
const thetitle = "Ramsys"

export default class RamsysToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          header: "Ramsys Intro",
          description: "Ramsys overview guide",
          link: "https://drive.google.com/file/d/1MqS2sVJfwYTqUOfOavmohbumk3KF0Ybj/preview",
          showhide: style.popdown,
        },
        {
          id: 1,
          header: "Ramsys About",
          description: "Ramsys about info",
          link: "https://drive.google.com/file/d/1AXqd0qnjDYcinwynAmoWBcxz_AaTDL16/preview",
          showhide: style.popdown,
        },
        {
          id: 2,
          header: "Ramsys Dashboard",
          description: "Ramsys dashboard overview",
          link: "https://drive.google.com/file/d/159YPWko2gLXD0P9zAzO2RpnCTz9ZL_Fs/preview",
          showhide: style.popdown,
        },
        {
          id: 3,
          header: "Ramsys Hospitality",
          description: "Ramsys hospitality guide",
          link: "https://drive.google.com/file/d/10mL5f6-1i_TYaPK5uk2hx0l568F74Oi3/preview",
          showhide: style.popdown,
        },
        {
          id: 4,
          header: "Ramsys Install",
          description: "Ramsys installation",
          link: "https://drive.google.com/file/d/1skJdKzuNwgGO2VD2jIGlUaJOrb7m9qfo/preview",
          showhide: style.popdown,
        },
        {
          id: 5,
          header: "Ramsys maintanance ",
          description: "Ramsys stock file maintance guide",
          link: "https://drive.google.com/file/d/1RpqNu6Eo_yGqGNXsg4bhgIgbsz4CrDE8/preview",
          showhide: style.popdown,
        },
        {
          id: 6,
          header: "Operations",
          description: "Staff and day to day operations",
          link: "https://drive.google.com/file/d/1jL5z4-yElv9JLgusqbNw7edhVFhCKrth/preview",
          showhide: style.popdown,
        },
        {
          id: 7,
          header: "Ramsys Reports",
          description: "Generate and view reports",
          link: "https://drive.google.com/file/d/16de-LOqW4TGVFf9YywWy0fCa6bYsaxRw/preview",
          showhide: style.popdown,
        },
        {
          id: 8,
          header: "Retail sales",
          description: "Guide on retail",
          link: "https://drive.google.com/file/d/13RutLp8zdh9sTmuE2DKKo9F-aeWPzsNs/preview",
          showhide: style.popdown,
        },
        {
          id: 9,
          header: "Sales Payment",
          description: "Ramsys sales payment",
          link: "https://drive.google.com/file/d/1heKxGOjCPpes9aO54PVWalNGs8FoZb_E/preview",
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
