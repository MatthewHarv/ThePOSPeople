import { Link } from "gatsby"
import React, { Component } from "react"
import * as style from "../css/navbar.module.scss"
import cx from "classnames"
import Logo from "../../images/TPPLogo/logophone.png"

const activestyle = {
  color: "rgb(128, 194, 65)",
}

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    navcss: "collapse navbar-collapse ",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/retail",
        text: "Retail",
      },
      {
        id: 3,
        path: "/hospitality",
        text: "Hospitality",
      },
      {
        id: 4,
        path: "/integrations",
        text: "Integrations",
      },
      {
        id: 5,
        path: "/products",
        text: "Products",
      },
      {
        id: 6,
        path: "/support",
        text: "Support",
      },
      {
        id: 7,
        path: "/news",
        text: "News",
      },
      {
        id: 8,
        path: "/about",
        text: "About Us",
      },
      {
        id: 9,
        path: "/contact",
        text: "Contact Us",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          navcss: "collapse navbar-collapse ",
        })
      : this.setState({
          navbarOpen: true,
          navcss: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <div>
        <nav
          className={cx(
            ["navbar navbar-expand-lg navbar-light bg-light fixed-top"],
            style.navBarContainer
          )}
        >
          <Link to="/" className="navbar-brand">
            <img className={style.headerlogo} src={Logo} alt="logo" />
          </Link>
          <button
            className={cx(["navbar-toggler"], style.toggleborder)}
            type="button"
            onClick={this.navbarHandler}
          >
            <span className={cx(["navbar-toggler-icon"])} />
          </button>
          <div className={this.state.navcss}>
            <ul className="navbar-nav ms-auto">
              {this.state.links.map((link) => {
                return (
                  <li key={link.id} className={style.navitem}>
                    <Link
                      id="navlinks"
                      to={link.path}
                      activeStyle={activestyle}
                      className={cx(
                        ["nav-link text-capitalize"],
                        style.navtext
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
