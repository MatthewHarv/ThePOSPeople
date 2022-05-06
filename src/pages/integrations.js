import React, { Component } from "react"

import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import * as style from "../components/css/integration.module.scss"
import cx from "classnames"
import IntegrationTemplate from "../components/template/integrationTemplate"
import { StaticImage } from "gatsby-plugin-image"
import ContactButton from "../components/template/contactButton"

const integrationdata = [
  {
    id: 0,
    name: "Xero",
    description:
      "Xero offers a cloud-based accounting software platform for small and medium-sized businesses.",
    secondarydescription: "",
    category: "Accounting",
    image: (
      <StaticImage
        src="../images/Logos/Xero.png"
        alt="xero"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 1,
    name: "MYOB",
    description:
      "A complete cloud-based ERP solution which provides powerful, cohesive and end-to-end business management ",
    secondarydescription: "",
    category: "Accounting",
    image: (
      <StaticImage
        src="../images/Logos/Myob.png"
        alt="myob"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 2,
    name: "Shopify",
    description:
      "A multinational e-commerce company that powers over 1 million business's worldwide",
    secondarydescription: "",

    category: "Online Ordering",

    image: (
      <StaticImage
        src="../images/Logos/shopify.png"
        alt="Shopify"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 3,
    name: "Clarity",
    description:
      "Clarity Hospitality Software Solutions offers property management software, event management software, point of sale solutions, multiple property management solutions and online booking integration.",
    secondarydescription: "",

    category: "PMS",

    image: (
      <StaticImage
        src="../images/Logos/Clarity.png"
        alt="Clarity"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 4,
    name: "Oracle",
    description:
      "Oracle Hospitality's cloud-based and mobile-enabled PMS and POS software, powerful hardware, and consulting services optimize hotel and food and beverage management...",
    secondarydescription: "",

    category: "PMS",

    image: (
      <StaticImage
        src="../images/Logos/Oracle.png"
        alt="Oracle"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 5,
    name: "Mr Yum",
    description:
      "Mr Yum is a web-based mobile menu, ordering and payment platform used by leading hospitality and etertainment venues for dine-in, pickup and delivery.",
    secondarydescription:
      "Mr Yum's visual menus and mobile ordering allows staff to create meaningful experiences for guests and deliver great hospitality, which results in increases in average order size by 20-40%.",

    category: "Online Ordering",

    image: (
      <StaticImage
        src="../images/Logos/mryum.png"
        alt="Mr Yum"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 6,
    name: "Now Book It",
    description:
      "The smart solution for online table management. Now Book It is a platform that enables restaurants to take bookings online, manage tables, sell gift cards and build a customer database.",
    secondarydescription:
      "Now Book It™ is an online reservation system that fully integrates with your website, allowing customers to get a confirmed booking instantly online, with these bookings automatically populating your restaurant diary.",

    category: "Online Ordering",
    image: (
      <StaticImage
        src="../images/Logos/nowbookit.png"
        alt="Now Book It"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 7,
    name: "Extra Order",
    description:
      "Making ordering a simple and fast process. Scan, order and pay from your phone. It's that simple. Choose how you'd like to receive your food, takeaway, delivery or dine Extraorder has you sorted for your next online order.",
    secondarydescription: "",

    category: "Online Ordering",

    image: (
      <StaticImage
        src="../images/Logos/extraorder.png"
        alt="Extra Order"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 8,
    name: "ResDiary",
    description:
      "ResDiary is a flat-fee, online reservation system, designed to help hospitality operators run a smooth service. Thousands of restaurants, bars, clubs, and hotels across the world use ResDiary to manage their bookings; from taking online reservations to managing tables, selling tickets, and processing online payments.",
    secondarydescription:
      "The software delivers market-leading yield and table management technology, while helping build customer databases and profiles to develop relationships and loyalty.",

    category: "Online Ordering",

    image: (
      <StaticImage
        src="../images/Logos/resdiary.png"
        alt="ResDiary"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 9,
    name: "Uber Eats",
    description:
      "Uber Eats is an online food ordering and delivery platform.  Users can read menus, reviews and ratings, order, and pay for food from participating restaurants using an application on the iOS or Android platforms, or through a web browser. Users are also able to tip for delivery. The UberEats app connects you with a broad range of local restaurants which integrates with the POS for faster and better streamlined Takeaway service.",
    secondarydescription: "",

    category: "Online Ordering",
    image: (
      <StaticImage
        src="../images/Logos/ubereats.png"
        alt="Uber Eats"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 10,
    name: "Menu Log",
    description:
      "Menulog is an app-based food delivery platform, offering Kiwis the greatest choice of restaurants and cuisines across the country. Menulog also offers choice for local restaurants, with two services to choose from. The first is self-delivery, where restaurants can provide their own drivers, leveraging Menulog's world-class ordering technology and national network. The second is the Menulog Delivery Service, where Menulog also provides delivery logistics via its network of couriers.",
    secondarydescription:
      "Menulog is proud to continue to support restaurants and businesses of all shapes and sizes; from independent restaurants and cafes to some of the world's favourite brands, such as McDonalds, Burger King, Mad Mex, Zambrero and more.",

    category: "Online Ordering",

    image: (
      <StaticImage
        src="../images/Logos/menulog.png"
        alt="Menu Log"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
  {
    id: 11,
    name: "Mobi",
    description:
      "Mobi is an industry leader in multi-channel digital ordering that offers all-in-one ordering solutions for contactless delivery and pickup, is able to get its customers onboarded, set-up and operating rapidly.",
    secondarydescription: "",

    category: "Online Ordering",
    image: (
      <StaticImage
        src="../images/Logos/mobi.png"
        alt="Mobi"
        formats={["AUTO", "WEBP"]}
      />
    ),
  },
]

export default class Integration extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Seo title="Integration" />
          <div className="offset">
            <div className={cx(["position-relative"], style.topcontainer)}>
              <div className="container">
                <div className="row flex-row-reverse">
                  <div className="col-12 col-lg-6 d-flex align-items-center ">
                    <StaticImage
                      className="img-fluid"
                      src="../images/Integration/Integrationoverview.jpg"
                      alt="Integrationoverview"
                      formats={["AUTO", "WEBP"]}
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex align-items-center ">
                    <div>
                      <h1 className={style.intohead}>
                        Every business is unique
                      </h1>
                      <p className={style.intobody}>
                        We understand that every business has different
                        processes and procedures to keep day to day operations
                        running smoothly. Our varity of POS software allow us to
                        supply and support our customers with the optimal system
                        for their needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.businessContainer}>
              <div className="row gutter-xs-none gutter-md-narrow">
                <div className="col-12 justify-content-center">
                  <div className="row justify-content-center">
                    <h2
                      className={cx(["text-center col-12"], style.secondheader)}
                    >
                      Run your business your way
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row gutter-xs-none gutter-md-narrow">
                <div className="col-12 justify-content-center">
                  <div className="row gutter-xs-none gutter-md-narrow justify-content-center ">
                    <div className="col-12">
                      <div className="row gutter-md-wide justify-content-center">
                        <div className="col-md-4 align-items-center justify-content-center text-center vhq-mb-20">
                          <p className={style.twopartheader}>Hospitality</p>
                          <p className={style.twopartbody}>
                            From online orders to property management systems,
                            there are plenty of integrations that will enchance
                            hospitality service.
                          </p>
                        </div>

                        <div className="col-md-4 align-items-center justify-content-center text-center ">
                          <p className={style.twopartheader}>Retail</p>
                          <p className={style.twopartbody}>
                            Inventory management and in depth reporting is
                            essessical for retail and we have the POS systems
                            you need!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.integratecontainer}>
              <div className={cx(["container"])}>
                <div className="row gutter-xs-none gutter-md-narrow">
                  <div className="col-12 justify-content-center">
                    <div className="row justify-content-center">
                      <h2
                        className={cx(
                          ["text-center col-12"],
                          style.integrateheader
                        )}
                      >
                        Integrate your Point Of Sale system with these leading
                        business applications. Ask us how!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <IntegrationTemplate data={integrationdata}></IntegrationTemplate>
            </div>
            <div>
              <p className={style.contact}>
                Contact our team to find out more how we can integrate your POS
                with these integrations.
              </p>
              <div className={style.button}>
                <ContactButton></ContactButton>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
