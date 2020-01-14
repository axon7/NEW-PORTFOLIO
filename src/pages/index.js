import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import lightning from "../images/lightning.svg"
import { Link } from "gatsby"
import ProjectList from "../components/ProjectList"
import Technologies from "../components/Technologies"

const StyledMain = styled.main`
  width: 100%;
  background-color: #ff9e2c;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: left;
  transform: skew(0deg, -8deg);
  margin-top: -150px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  transform: skew(0deg, 8deg);
  padding-top: 100px;
  padding-bottom: 100px;
`
const Text = styled.div`
  text-align: left;
  width: 69%;
  margin-bottom: 50px;
  margin-top: 50px;
`

const Intro = styled.p`
  width: 63%;
  line-height: 1.5em;
`
const Lightning = styled.img`
  margin-top: 50px;
  display: flex;
  align-self: flex-end;
`

const StyledH1 = styled.h1`
  font-weight: 900;
  font-size: 2.6em;
  word-break: keep-all;
  margin-bottom: 0px;
`

const DevTitle = styled.p`
  color: white;
  font-weight: 600;
  margin-bottom: 18px;
  margin-top: -5px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <StyledMain>
      <Content>
        <Lightning src={lightning} alt="lightning svg" />
        <Text>
          <StyledH1>Kuba Zając</StyledH1>
          <DevTitle>WEB DEVELOPER</DevTitle>
          <Intro>
            I’m a self-taught front-end developer focused on creating{" "}
            <b>clean</b>, <i>blazing fast</i> apps.
          </Intro>
        </Text>
        <Button as={Link} to="/projects">
          SHOW PROJECTS
        </Button>
      </Content>
    </StyledMain>
    <Technologies />
    <ProjectList />
  </Layout>
)

export default IndexPage
