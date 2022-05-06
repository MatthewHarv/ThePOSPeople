import React, { Component } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import * as style from "../../components/css/footer.module.scss"
import cx from "classnames"
export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className={style.thefooter}>
          <div className={cx(["container-fluid padding"], style.text)}>
            <div className="row text-center">
              <div className="col-md-4">
                <div>
                  <StaticImage
                    className={cx([""], style.footerlogo)}
                    src="../../images/TPPLogo/footlogo.jpg"
                    alt="logobottom"
                    formats={["AUTO", "WEBP"]}
                  />

                  <span>
                    <StaticImage
                      className={cx([""], style.hmslogo)}
                      src="../../images/TPPLogo/hmslogo.jpg"
                      alt="hmslogo"
                      formats={["AUTO", "WEBP"]}
                    />
                  </span>
                </div>

                <div className={style.sociallogo}>
                  <a
                    title="facebook"
                    href="https://www.facebook.com/thepospeoplenz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.socialmedia}
                  >
                    <FaFacebook className={style.fblogo} />
                  </a>

                  <a
                    title="instagram"
                    href="https://www.instagram.com/the_pos_people/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.socialmedia}
                  >
                    <FaInstagram className={style.inlogo} />
                  </a>
                  <a
                    title="linkedin"
                    href="https://www.linkedin.com/company/the-pos-people/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.socialmedia}
                  >
                    <FaLinkedin className={style.lilogo} />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <h5 className={style.texttitle}>Contact</h5>
                <hr className="light" />
                <p>09 444 3903</p>
                <p>0800 POS 100</p>
                <p>0800 767 100</p>
                <p>support@thepospeople.co.nz</p>
                <p>sales@thepospeople.co.nz</p>
              </div>
              <div className="col-md-4">
                <h5 className={style.texttitle}>Our Hours</h5>
                <hr className="light" />
                <p className={style.textbold}>Office Hours:</p>
                <p>Monday to Friday - 8:30am to 5pm</p>
                <p className={style.textbold}>Support Hours:</p>
                <p>24/7</p>
              </div>

              <div className="col-12">
                <hr className="light-100" />
                <h5>&copy; The POS People</h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
