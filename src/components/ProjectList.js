import React from "react"
import styled from "styled-components"
import implanty24 from "../images/implanty24.png"
import chingustore from "../images/chingustore.png"
import weatherapp from "../images/weatherapp.png"
import chatuchatu from "../images/chatu-chatu.png"
import Project from "./Project"
import ButtonLink from "./ButtonLink"

const StyledWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectsList = styled.section`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  height: 100%;
  margin: 10%;
`

// const ProjectDescription = styled.div``

const ProjectList = () => (
  <StyledWrapper>
    <ProjectsList>
      <h1>Work</h1>
      <Project
        title="Chingu Store"
        link="wp.pl"
        image={chingustore}
        linkGithub="https://github.com/axon7/weather-app"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      />
      <Project
        title="Chatu-chatu"
        image={chatuchatu}
        linkGithub="https://github.com/axon7/chatu-chatu"
        text="Real-time chat with use of Node.js. Sockets provides a communication channel between
        a client and a server.
        Utilized: React, socket.io, Node.js, styled-components"
      />
      <Project
        title="Weather App"
        linkGithub="https://github.com/axon7/weather-app"
        image={weatherapp}
        text="Geolocation based weather application showing forecast from
        DarkSky API Real-time chat with use of Node.js. Sockets provides a communication channel between a client and a server. Utilized: React, socket.io, Node.js, styled-components"
      />
      <Project
        title="IMPLANTY24"
        link="wp.pl"
        image={implanty24}
        linkGithub="https://github.com/axon7/weather-app"
        text="Website prototype for dental clinic made in Adobe XD "
      />
    </ProjectsList>
  </StyledWrapper>
)

export default ProjectList
