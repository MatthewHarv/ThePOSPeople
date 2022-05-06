import React from "react"
import * as style from "../css/contact.module.scss"
import cx from "classnames"
export default function ContactImage() {
  return (
    <div className={style.outContact}>
      <div className={cx(["container"], style.contactform)}>
        <h1 className={style.contactTitle}>Contact form</h1>

        <div className="row">
          <div className={cx(["col-md-5"], style.contactContainer)}>
            <h3 className={style.infoTitle}>Contact Us</h3>

            <div className={style.infoDescription}>
              If you need urgent assistance please call us on<br></br>
              <strong>
                <p>09 444 3903</p>
                <p>0800 POS 100</p>
                <p>0800 767 100</p>
              </strong>
              <br></br>
              Otherwise, please use the contact form and we will get back to
              you.
            </div>
            <br></br>
            <h3 className={style.contactDetail}>Contact Details</h3>

            <p className={style.infoContact}>support@thepospeople.co.nz</p>
            <p className={style.infoContact}>sales@thepospeople.co.nz</p>
            <p className={style.infoContact}>accounts@thepospeople.co.nz</p>
          </div>
          <div className={cx(["col-md-7"], style.formContainer)}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
                aria-label="contactlabel"
              />
              <p className={style.hidden}>
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" aria-label="botlabel" />
                </label>
              </p>
              <div className="form-group">
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    aria-label="namelabel"
                    className={cx(["form-control"], style.input)}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    aria-label="emaillabel"
                    className={cx(["form-control"], style.input)}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Phone/Mobile
                  <input
                    name="phone"
                    type="text"
                    aria-label="phonelabel"
                    className={cx(["form-control"], style.input)}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Message
                  <textarea
                    name="message"
                    aria-label="messagelabel"
                    className={cx(["form-control"], style.input)}
                    rows="7"
                    required
                  ></textarea>
                </label>
              </div>
              <div className={cx(["form-group"], style.formButton)}>
                <button
                  type="submit"
                  className={cx(["btn btn-block"], style.inputButton)}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
