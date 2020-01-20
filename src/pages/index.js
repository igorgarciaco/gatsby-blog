import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout/layout.js"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="lightblue"
      category="Misc"
      date="30 de Julho"
      timeToRead="4"
      title="Olá Mundo"
      description="Lorem Ipsum dolor sit amet"
    />

  </Layout>
)

export default IndexPage
