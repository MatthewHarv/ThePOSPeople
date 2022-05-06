import React, { Component } from "react"
import * as style from "../css/login.module.scss"
import cx from "classnames"

export default class resourceconstructor extends Component {
  render() {
    var handleToUpdate = this.props.handleToUpdate
    return (
      <div>
        <h2>{this.props.title}</h2>

        {this.props.data.map((link) => {
          return (
            <div key={link.id} className={style.listContainer}>
              <div
                onClick={() => handleToUpdate(link.id)}
                role="button"
                tabIndex={link.id}
                onKeyDown={() => handleToUpdate(link.id)}
                title={this.props.data[link.id].header}
                className={cx(
                  ["list-group-item list-group-item-action"],
                  style.list
                )}
              >
                <div className={this.props.data[link.id].showhide}>
                  <div className={style.modal}>
                    <div className={style.modalcontent}>
                      <div className={style.modalheader}>
                        <a
                          className={style.headerlink}
                          title={this.props.data[link.id].header}
                          href={this.props.data[link.id].link.substring(
                            0,
                            this.props.data[link.id].link.length - 8
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h2>{this.props.data[link.id].header}</h2>
                        </a>
                      </div>
                      <div className={style.modalbody}>
                        <iframe
                          title={this.props.data[link.id].header}
                          src={this.props.data[link.id].link}
                          className={style.previewwindow}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className={style.linkHeader}>
                  {this.props.data[link.id].header}
                </h4>
                <p className={style.linkDescription}>
                  {this.props.data[link.id].description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
