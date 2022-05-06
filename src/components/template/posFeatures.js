import React, { Component } from "react"
import * as styles from "../css/posfeatures.module.scss"
import { BgImage } from "gbimage-bridge"
import ContactButton from "../template/contactButton"
export default class posFeatures extends Component {
  render() {
    return (
      <div>
        <BgImage
          image={this.props.data.coverimage}
          className={styles.cover}
        ></BgImage>

        <div className={styles.leadContainer}>
          <h1 className={styles.title}>{this.props.data.title}</h1>
          <p className={styles.leadtitle}>{this.props.data.leadtitle}</p>
          <p className={styles.leaddescription}>
            {this.props.data.leaddescription}
          </p>
          <p className={styles.leaddescription}>
            {this.props.data.secondarydescription}
          </p>
        </div>
        <div>
          <h2 className={styles.featurestitle}>Features</h2>
          <div className={styles.featureContainer}>
            {this.props.data.features.map((feature) => {
              return (
                <div key={feature.id} className={styles.features}>
                  <div className={styles.featuretitle}>{feature.title}</div>
                  <div className={styles.featuredescription}>
                    {feature.featureDescription}
                  </div>
                  <div>
                    <BgImage
                      image={feature.image}
                      className={styles.featureimage}
                    ></BgImage>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.contact}>
          <p>Looking for more information?</p>
          <ContactButton></ContactButton>
        </div>
      </div>
    )
  }
}
