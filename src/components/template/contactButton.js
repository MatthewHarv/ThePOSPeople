import React from "react"
import { Link } from "gatsby"
import * as style from "../css/contactbutton.module.scss"
import cx from "classnames"
export default function contactButton() {
  return (
    <div>
      <Link
        type="button"
        className={cx(["btn btn-primary btn-lg"], style.contactButton)}
        to="/contact"
      >
        Contact Us
      </Link>
    </div>
  )
}
