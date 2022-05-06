import React from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import * as style from "../components/css/success.module.scss"
import Bluetext from "../components/template/bluetext"

const titleInner = "Thank you for your message"

const textInner = <>We will be contacting you shortly</>

const Success = () => (
  <Layout>
    <Seo title="Success" />
    <div className={style.container}>
      <Bluetext titleInner={titleInner} textInner={textInner}></Bluetext>
    </div>
  </Layout>
)

export default Success
