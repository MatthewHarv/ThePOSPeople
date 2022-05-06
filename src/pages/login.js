import React from "react"
import { Router } from "@reach/router"
import {
  login,
  logout,
  isAuthenticated,
  getProfile,
} from "../components/template/auth"
import MainToggle from "../components/resources/maintoggle"
import * as style from "../components/css/login.module.scss"
import cx from "classnames"
import { Link } from "gatsby"

const Home = ({ user }) => {
  return (
    <div className={cx(["padding text-center"], style.container)}>
      <button
        type="button"
        href="#logout"
        className={cx(["btn btn-lg"], style.nav)}
        onClick={(e) => {
          logout()
          e.preventDefault()
        }}
      >
        Log Out
      </button>

      <h1 className={style.welcomeHeader}>
        Welcome to The POS People{" "}
        <Link to="/login/test" className={style.testLink}>
          resource
        </Link>{" "}
        page
      </h1>

      <MainToggle></MainToggle>
    </div>
  )
}
const Testing = () => (
  <div className={cx(["padding text-center"], style.container)}>
    <button
      type="button"
      href="#logout"
      className={cx(["btn btn-lg"], style.nav)}
      onClick={(e) => {
        logout()
        e.preventDefault()
      }}
    >
      Log Out
    </button>
    <Link to="/login" className={cx(["btn btn-lg"], style.nav)}>
      Resource Page
    </Link>
    <h1>Welcome to the test page </h1>
  </div>
)

const Login = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <Router>
        <Home path="/login/" user={user} />
        <Testing path="/login/test" />
      </Router>
    </>
  )
}

export default Login

/*
  <p>You are logged in as {user.name} </p>


*/
