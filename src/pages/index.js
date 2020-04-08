import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RunningGirl from "../images/running-girl 1.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Hong's Website" />
    <div>
      <img src={RunningGirl} />
      <h1>TRAIN WITH HONG</h1>
      <h3>Eat Right, work out, calculate</h3>
      <button>Contact Now</button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
