import React from "react"
import Layout from "../components/template/layout"
import Seo from "../components/template/seo"
import ContactContents from "../components/template/contactContents"
const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />

    <ContactContents></ContactContents>
  </Layout>
)

export default ContactPage
