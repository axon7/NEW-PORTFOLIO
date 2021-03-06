import React from "react"
import styled from "styled-components"
import SEO from "./seo"
import Button from "./Button"
import lightning from "../images/lightning.svg"
import { Link } from "react-scroll"

const StyledMain = styled.main`
  width: 100%;
  background-color: #ff9e2c;
  height: 100%;
  color: black;
  text-align: left;
  -webkit-transform: skew(0deg, -8deg);
  -ms-transform: skew(0deg, -8deg);
  transform: skew(0deg, -8deg);
  margin-top: -150px;
`

const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  -webkit-transform: skew(0deg, 8deg);
  -ms-transform: skew(0deg, 8deg);
  transform: skew(0deg, 8deg);
  padding-top: 100px;
  padding-bottom: 100px;
`
const Text = styled.div`
  text-align: left;
  padding: 0 11%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 92vw;
  max-width: 948px;
  margin: 0 auto;
`

const Intro = styled.p`
  line-height: 1.5em;
  -ms-flex-item-align: start;
  align-self: flex-start;
  max-width: 359px;
  @media (min-width: 1024px) {
    font-size: 1.3em;
    margin-bottom: 12%;
  }
`
const Lightning = styled.img`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin-top: 70px;
`

const StyledH1 = styled.h1`
  width: 100%;

  font-weight: 900;
  font-size: 2.6em;
  word-break: keep-all;
  margin-bottom: 0px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
    font-size: 5.6rem;
  }
`

const DevTitle = styled.p`
  text-align: left;
  width: 100%;
  color: white;
  font-weight: 800;
  margin-bottom: 18px;
  margin-top: -2px;
  @media (min-width: 1024px) {
    font-size: 1.3em;
  }
`
const Home = () => {
  return (
    <>
      <SEO title="home" />
      <StyledMain id="home">
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
          <Button
            as={Link}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SHOW PROJECTS
          </Button>
        </Content>
      </StyledMain>
    </>
  )
}

export default Home
