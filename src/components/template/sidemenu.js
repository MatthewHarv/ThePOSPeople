import React, { Component } from "react"
import { Link } from "gatsby"
import * as style from "../../components/css/sidemenu.module.scss"
import cx from "classnames"

const activestyle = {
  color: "rgb(128, 194, 65)",
}

export default class sidemenu extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/hospitality",
        text: "Hospitality",
      },
      {
        id: 2,
        path: "/cafe",
        text: "Cafes",
      },
      {
        id: 3,
        path: "/bar",
        text: "Bars",
      },
      {
        id: 4,
        path: "/restaurant",
        text: "Restaurants",
      },
      {
        id: 5,
        path: "/hotel",
        text: "Hotels",
      },
      {
        id: 6,
        path: "/mobile",
        text: "Mobile",
      },
      {
        id: 7,
        path: "/franchise",
        text: "Franchise Groups",
      },
    ],
  }
  render() {
    return (
      <div className={cx(["col-md-3"], style.sidemenucontainer)}>
        <ul>
          {this.state.links.map((link) => {
            return (
              <li key={link.id} className={style.noliststyle}>
                <Link
                  to={link.path}
                  className={style.categories}
                  activeStyle={activestyle}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
