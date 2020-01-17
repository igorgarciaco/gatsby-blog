import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import imagemEscolhida from "../images/404.svg"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img src={imagemEscolhida}/>
  </Layout>
)

export default NotFoundPage
