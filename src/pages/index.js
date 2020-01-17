import React from "react"
import Layout from "../components/layout"
import Home from "../components/Home"
import ProjectList from "../components/ProjectList"
import Technologies from "../components/Technologies"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Home />
    <Technologies />
    <ProjectList />
    <Contact />
  </Layout>
)

export default IndexPage
