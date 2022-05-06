import React, { Component } from "react"
import cx from "classnames"
import uuid from "react-uuid"
import * as style from "../css/newstemplate.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const dataContent = [
  {
    id: 0,
    image: (
      <StaticImage
        src="../../images/News/Article.jpg"
        alt="news"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 1,
    image: (
      <StaticImage
        src="../../images/News/duck.PNG"
        alt="news"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
]

export default class resourceconstructor extends Component {
  render() {
    var handleToUpdate = this.props.handleToUpdate
    return (
      <div>
        <h2 className={style.postitle}>{this.props.title}</h2>
        <div className={style.newsContainer}>
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
                          <h2 className={style.cardHeader}>
                            {this.props.data[link.id].header}
                          </h2>
                        </div>
                        <div>{dataContent[link.id].image}</div>
                        <div className={style.modalbody}>
                          {this.props.data[link.id].descriptionarray.map(
                            (array) => {
                              return (
                                <div key={uuid()}>
                                  <p className={style.descriptionarray}>
                                    {array}
                                  </p>
                                </div>
                              )
                            }
                          )}
                          <div>
                            <a
                              title="article"
                              href={this.props.data[link.id].link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={style.link}>
                                {this.props.data[link.id].linkdescription}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={style.linkHeader}>
                      {this.props.data[link.id].header}
                    </div>
                    <div className={cx([""], style.newsimagePreview)}>
                      {dataContent[link.id].image}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
