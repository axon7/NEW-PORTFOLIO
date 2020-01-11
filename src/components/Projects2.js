import React from "react"
import styled from "styled-components"
import implanty24 from "../images/implanty24.png"
import chingustore from "../images/chingustore.png"
import weatherapp from "../images/weatherapp.png"
import chatuchatu from "../images/chatu-chatu.png"

const StyledWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectsList = styled.section`
  width: 60%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  height: 100%;
`

const ProjectLink = styled.a`
  color: black;
  margin-bottom: 2rem;
  margin-top: 1rem;
  &:nth-child(1) {
    margin-top: 2rem;
  }
  :hover {
    opacity: 0.6;
    transition: 0.2s;
    transform: scale(0.98);
  }
`
const Description = styled.p`
  color: black;
  width: auto;
`

// const ProjectDescription = styled.div``

const Projects = () => (
  <StyledWrapper>
    <ProjectsList>
      <h1>Work</h1>
      <ProjectLink href="https://xd.adobe.com/view/02de1ca6-9b0d-4353-69ad-f2ed4e7a7cf0-74ef/?fullscreen">
        <img
          src={implanty24}
          alt="implanty"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </ProjectLink>
      <Description>
        IMPLANTY24 - website prototype made in Adobe XD for dental clinic
      </Description>
      <ProjectLink href="https://chingu-voyages.github.io/v9-geckos-team-12/">
        <img
          src={chingustore}
          alt="chingustore"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </ProjectLink>
      <Description>Chingu store</Description>

      <ProjectLink href="https://axon7.github.io/weather-app/">
        <img
          src={weatherapp}
          alt="weatherapp"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </ProjectLink>
      <Description>Weather application using geolocation</Description>

      <ProjectLink href="https://chatu-chatu.herokuapp.com">
        <img
          src={chatuchatu}
          alt="chatuchatu"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </ProjectLink>
      <Description>Chatu-Chatu, real-time chat app</Description>

      <ProjectLink href="#">
        <Description>
          Album Reviews full-stack application in MERN stack (coming soon)
        </Description>
      </ProjectLink>
    </ProjectsList>
  </StyledWrapper>
)

export default Projects
