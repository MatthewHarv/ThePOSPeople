import React, { Component } from "react"

export default class posproducttemplate extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.productinfo.name}</h1>
        <p>{this.props.productinfo.description}</p>
      </div>
    )
  }
}
