import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const StyledFooter = styled.footer`
  background-color: #00499b;
  height: 15vh;
  width: 100%;
  color: white;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 95px 0;
`

const StyledIconsDiv = styled.div`
  font-size: 50px;
  display: flex;
  display: -webkit-flex;
  justify-items: center;
  align-items: center;
  max-width: 600px;
`
// import { Helmet } from "react-helmet"

const Footer = () => (
  <>
    <StyledFooter>
      <StyledIconsDiv>
        <a href="https://github.com/axon7" style={{ color: "white" }}>
          <FaGithub style={{ marginRight: "10px" }} />
        </a>
        <a href="https://linkedin.com" style={{ color: "white" }}>
          <FaLinkedin style={{ marginLeft: "10px" }} />
        </a>
      </StyledIconsDiv>
      <p style={{ fontSize: "0.75em" }}>
        © 2020 Jakub Zając. All rights reserved.
      </p>
    </StyledFooter>
  </>
)

export default Footer
