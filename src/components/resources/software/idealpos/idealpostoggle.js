import React, { Component } from "react"
import ResourceConstructor from "../../resourceconstructor"
import * as style from "../../../css/login.module.scss"
const thetitle = "Idealpos"

export default class IdealposToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          header: "Idealpos Overview",
          description:
            "Goes over the components of ideal pos and gives an overview of the product",
          link: "https://drive.google.com/file/d/1KDF3Rz50E-oBNJPE7ygN5BMfd8IPrxIJ/preview",
          showhide: style.popdown,
        },
        {
          id: 1,
          header: "Accounting Interface",
          description: "Summary of the accounting integration",
          link: "https://drive.google.com/file/d/1Pkyd3-WYfVSWWTDlDXa2K9-prU1H9r0x/preview",
          showhide: style.popdown,
        },
        {
          id: 2,
          header: "Adult Age Restriction",
          description: "How to record an ID against a sale",
          link: "https://drive.google.com/file/d/1sXh4uzDlANeZ3YhVhsTMkUmKw-ZVWyRI/preview",
          showhide: style.popdown,
        },
        {
          id: 3,
          header: "Alerts",
          description:
            "Configure triggers that can send emails and notify when actions are taken such as refunds",
          link: "https://drive.google.com/file/d/1H0owJeXUSUpJvWArHZYjb1uAwc-HVvBC/preview",
          showhide: style.popdown,
        },
        {
          id: 4,
          header: "Amount Override",
          description: "How to override a price of an item",
          link: "https://drive.google.com/file/d/1VnbiZVa7n0nRQGQ4Dh3Jbyby1E8RXf5d/preview",
          showhide: style.popdown,
        },
        {
          id: 5,
          header: "Bar Tabs",
          description: "How to setup and charge items to tabs ",
          link: "https://drive.google.com/file/d/1B0gjHkibE-p1ZfQtVnNE87yie8QAOlEh/preview",
          showhide: style.popdown,
        },
        {
          id: 6,
          header: "Barcode Scanner",
          description: "Setting up the barcode scanner",
          link: "https://drive.google.com/file/d/1qDMWiMCoO4BWJj2YgU1g8BqCeDO0i7Wl/preview",
          showhide: style.popdown,
        },
        {
          id: 7,
          header: "Clerks",
          description:
            "How to create, edit and configure clerks and permissions they have",
          link: "https://drive.google.com/file/d/1scT1dGxEHwrsBQ9L6Ueio1TWzeIr6k0r/preview",
          showhide: style.popdown,
        },
        {
          id: 8,
          header: "Clipp",
          description:
            "How to set up Clipp which allows you to pay for tabs remotely",
          link: "https://drive.google.com/file/d/1rZuYdDsI2lr5ucH9B-_tAOnh9AzrQh-k/preview",
          showhide: style.popdown,
        },
        {
          id: 9,
          header: "Communications",
          description: "Controlling information sent to multiple POS's",
          link: "https://drive.google.com/file/d/1scT1dGxEHwrsBQ9L6Ueio1TWzeIr6k0r/preview",
          showhide: style.popdown,
        },
        {
          id: 10,
          header: "Clerks",
          description:
            "How to create, edit and configure clerks and permissions they have",
          link: "https://drive.google.com/file/d/1scT1dGxEHwrsBQ9L6Ueio1TWzeIr6k0r/preview",
          showhide: style.popdown,
        },
        {
          id: 11,
          header: "Coupons",
          description: "How to create, edit and configure coupons",
          link: "https://drive.google.com/file/d/1ufMyQIpb9DNcTcmQilCRPimvkMFBcBKn/preview",
          showhide: style.popdown,
        },
        {
          id: 12,
          header: "Discounts",
          description: "How to create, edit and configure discounts",
          link: "https://drive.google.com/file/d/1ywJjpxekFxTQHNNGPRKTNi_D6KaNn1b6/preview",
          showhide: style.popdown,
        },
        {
          id: 13,
          header: "End of day",
          description: "How to reconsile tender types and set the float",
          link: "https://drive.google.com/file/d/1TwyOyXtBRjsTe9tYxZ-XvqZxt30ux59M/preview",
          showhide: style.popdown,
        },
        {
          id: 14,
          header: "Gift Vouchers",
          description: "How to create, edit and redeem gift vouchers",
          link: "https://drive.google.com/file/d/1hGaMuNpuV2PVcUbfoBBtCgTiOjSBMGp4/preview",
          showhide: style.popdown,
        },
        {
          id: 15,
          header: "Hold and print",
          description:
            "How to use the hold and print function to customise when orders are printed.",
          link: "https://drive.google.com/file/d/12xxqLLe7b6E31wNh19J11ZpGFx2aSVg9/preview",
          showhide: style.popdown,
        },
        {
          id: 16,
          header: "Idealpos Online",
          description: "Setting up and using online orders and subscriptions.",
          link: "https://drive.google.com/file/d/1scT1dGxEHwrsBQ9L6Ueio1TWzeIr6k0r/preview",
          showhide: style.popdown,
        },
        {
          id: 17,
          header: "Import and exporting data",
          description: "How to export and import data to idealpos",
          link: "https://drive.google.com/file/d/1r0N_uIibv3aA1VQYLB1L5O2-VtsNKnri/preview",
          showhide: style.popdown,
        },
        {
          id: 18,
          header: "Installation",
          description: "How to install idealpos",
          link: "https://drive.google.com/file/d/1wBiqNt7sy1mH86vwIy24AEIxA09Yy1Rs/preview",
          showhide: style.popdown,
        },
        {
          id: 19,
          header: "Layby",
          description: "How to setup and use layby",
          link: "https://drive.google.com/file/d/1TkfDSWtGwhyHhZtU9CVf9298BDNrdXsL/preview",
          showhide: style.popdown,
        },
        {
          id: 20,
          header: "Mobile App",
          description: "How to use the mobile app for idealpos",
          link: "https://drive.google.com/file/d/1Ex18wgI-GPl_sim3JPkt0lwdiVPHeOUu/preview",
          showhide: style.popdown,
        },
        {
          id: 21,
          header: "Multiple Terminal",
          description: "How to set up multiple terminals",
          link: "https://drive.google.com/file/d/1y49kpdSfoEALKzuUqgOSIj_oHpVHgyzc/preview",
          showhide: style.popdown,
        },
        {
          id: 22,
          header: "Multisite",
          description: "How to setup and configure a multisite",
          link: "https://drive.google.com/file/d/121k3eZRjkxro3D2CY8VMhbfGc3FdIqdJ/preview",
          showhide: style.popdown,
        },
        {
          id: 23,
          header: "Networking",
          description: "Network configuration for groups and terminals",
          link: "https://drive.google.com/file/d/1F5Atc80nrfd0jyeIHbtcXBFIAZ3XACyT/preview",
          showhide: style.popdown,
        },
        {
          id: 24,
          header: "POS Screen Setup",
          description: "Setting up the POS screen resolution etc",
          link: "https://drive.google.com/file/d/1U86WFfUct806r5YIhBeJJU3n8qA_GH_p/preview",
          showhide: style.popdown,
        },
        {
          id: 25,
          header: "POS Screen layout",
          description: "Setting up the layout and flow of the POS",
          link: "https://drive.google.com/file/d/1G43yyNLeV0XxYO3fC3T_jtoG12CFDlMR/preview",
          showhide: style.popdown,
        },
        {
          id: 26,
          header: "POS Server",
          description: "Configuration of the POS Server",
          link: "https://drive.google.com/file/d/1REySIEZSl605Kwdtr9TuZWDep-9GJZ-q/preview",
          showhide: style.popdown,
        },
        {
          id: 27,
          header: "POS Terminal",
          description:
            "Used to configure location, printer options and connected hardware",
          link: "https://drive.google.com/file/d/1iE_Ldn_v2HWkw6alS5VHIBZBZM7RrQKp/preview",
          showhide: style.popdown,
        },
        {
          id: 28,
          header: "Promotions",
          description: "Customer reward promotions guide",
          link: "https://drive.google.com/file/d/1lsLLK7Dvalnr_CNvs717AkNd_7H5d_Ag/preview",
          showhide: style.popdown,
        },
        {
          id: 29,
          header: "Reports",
          description: "Goes in depth with generating a variety of reports",
          link: "https://drive.google.com/file/d/19vEqPRxxXyCStfob-o_SphYxWdXqSv2G/preview",
          showhide: style.popdown,
        },
        {
          id: 30,
          header: "Stock items",
          description: "Setting up stock",
          link: "https://drive.google.com/file/d/1aFUmKWkgzichaZatfQ2aiWL5yT9SESAs/preview",
          showhide: style.popdown,
        },
        {
          id: 31,
          header: "Stock purchases",
          description: "Guide on purchasing stock",
          link: "https://drive.google.com/file/d/1uy_K1aAMN-fvN15K9naxsc7jIIvyPtTM/preview",
          showhide: style.popdown,
        },
        {
          id: 32,
          header: "Stocktake",
          description: "Goes in depth with stocktake",
          link: "https://drive.google.com/file/d/19xPDCLn5kS6_LUynel9yOd5wPEuPmV0x/preview",
          showhide: style.popdown,
        },
        {
          id: 33,
          header: "Surcharge",
          description: "How to add a surcharge to items",
          link: "https://drive.google.com/file/d/1eOQDhoyWv8dCOSAu1L28D-f4K_xM1tPM/preview",
          showhide: style.popdown,
        },
        {
          id: 34,
          header: "Table map",
          description: "Creating a table map layout",
          link: "https://drive.google.com/file/d/1mzE-h6OwYE5Z9_wfXPLWuuGSEItrnEEs/preview",
          showhide: style.popdown,
        },
        {
          id: 35,
          header: "Void wastage",
          description: "How to write off items",
          link: "https://drive.google.com/file/d/1PRz-mxaX2u5jhCO6PxyST11cJtfL4PlD/preview",
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
