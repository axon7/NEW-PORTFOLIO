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
      <h2>Work</h2>
      <Project
        title="Chingu Store"
        link="https://chingu-voyages.github.io/v9-geckos-team-12/"
        image={chingustore}
        linkGithub="https://github.com/chingu-voyages/v9-geckos-team-12"
        text="Application fetches clothes data from ASOS.com API. User can
        search by name, sort, load more items and add them to the basket.
        Chingu Store was created in the team of 3 people. I learned a lot about Git workflow and project management"
      />
      <Project
        title="Chatu-chatu"
        image={chatuchatu}
        link="http://chatu-chatu.herokuapp.com/"
        linkGithub="https://github.com/axon7/chatu-chatu"
        text="Real-time chat with use of Node.js. Sockets provides a communication channel between
        a client and a server.
        Utilized: React, socket.io, Node.js, styled-components"
      />
      <Project
        title="Weather App"
        link="https://axon7.github.io/weather-app/"
        linkGithub="https://github.com/axon7/weather-app"
        image={weatherapp}
        text="Geolocation based weather application showing forecast from
        DarkSky API Real-time chat with use of Node.js. Sockets provides a communication channel between a client and a server. Utilized: React, socket.io, Node.js, styled-components"
      />
      <Project
        title="IMPLANTY24"
        link="https://xd.adobe.com/view/02de1ca6-9b0d-4353-69ad-f2ed4e7a7cf0-74ef/?fullscreen"
        image={implanty24}
        text="Website desktop prototype for dental clinic made in Adobe XD "
      />
    </ProjectsList>
  </StyledWrapper>
)

export default ProjectList
