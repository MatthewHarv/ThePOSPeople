import React from "react"

import Layout from "../components/template/layout"
import Seo from "../components/template/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Page does not exist</h1>{" "}
  </Layout>
)

export default NotFoundPage
