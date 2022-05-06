import React, { Component } from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import * as styles from "../components/css/newstemplate.module.scss"
import NewsConstructor from "../components/template/newconstructor"
import { StaticImage } from "gatsby-plugin-image"
import cx from "classnames"

export default class news extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          header: "The Restaurant & Cafe Magazine",
          description: "The POS People on magazines!",
          link: "http://restaurantandcafe.com",
          linkdescription: "Restaurant and cafe website",
          showhide: styles.popdown,
          date: "11/6/2020",
          descriptionarray: [
            "The POS People was featured in restaurant and cafe magazine!",
            "We told our viewers more about who we are and what our vision is.",
          ],
          //image
        },
        {
          id: 1,
          header: "The Great Duck Race",
          description: "The POS People Duck Race",
          link: "https://www.facebook.com/GreatAKLDDuckRace/videos/2746835718971367/",
          linkdescription: "The Great Duck Race",
          showhide: styles.popdown,
          date: "17/10/2020",
          descriptionarray: [
            "We competed in a duck race for charity and although we did not win, we did race in style!",
          ],

          //image
        },
      ],
    }
  }

  handleToUpdate(index) {
    let slicer = this.state.data.slice()
    slicer[index].open = !slicer[index].open
    if (slicer[index].showhide === styles.popup) {
      slicer[index].showhide = styles.popdown
    } else {
      slicer[index].showhide = styles.popup
    }

    this.setState({ arr: slicer })
  }

  render() {
    var handleToUpdate = this.handleToUpdate

    return (
      <Layout>
        <Seo title="News" />
        <StaticImage
          className={cx(["img-fluid"], styles.newscover)}
          src="../images/News/news.jpeg"
          alt="news"
          formats={["AUTO", "WEBP"]}
          layout="fullWidth"
        />
        <div className={styles.newsContent}>
          <div className="padding text-center">
            <h1 className={styles.title}>News</h1>
          </div>
          <NewsConstructor
            handleToUpdate={handleToUpdate.bind(this)}
            data={this.state.data}
          ></NewsConstructor>
        </div>
      </Layout>
    )
  }
}
