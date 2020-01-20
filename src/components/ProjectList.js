import React from "react"
import styled from "styled-components"
import implanty24 from "../images/projectimages/implanty24.png"
import chingustore from "../images/projectimages/chingustore.png"
import weatherapp from "../images/projectimages/WeatherApp.png"
import chatuchatu from "../images/projectimages/chatu-chatu.png"
import Project from "./Project"
import comingsoon from "../images/projectimages/comingsoon.jpg"

const StyledWrapper = styled.div`
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

const ProjectsList = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  margin: 3% 10%;
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
        utilized="React - Redux - MaterialUI - React-Router - ZenHub"
        text="Application fetches clothes data from ASOS.com API. User can
        search by name, sort, load more items and add them to the basket.
        Chingu Store was created in the team of 3 people. I learned a lot about Git workflow and project management. 
        
        ⚠ Live demo currently offline"
      />
      <Project
        title="Album Reviews - full-stack"
        image={comingsoon}
        link=""
        linkGithub="https://github.com/axon7/AlbumReviews"
        text="Full-stack application where users can add rate and write review for an music album. App is using Deezer API to fetch albums"
        utilized="React - Redux - Node.js - MongoDB - Express.js"
      />
      <Project
        title="Chatu-chatu"
        utilized="React - socket.io - Node.js - styled-components"
        image={chatuchatu}
        link="http://chatu-chatu.herokuapp.com/"
        linkGithub="https://github.com/axon7/chatu-chatu"
        text="Real-time chat with use of Node.js. Sockets provides a communication channel between
        a client and a server."
      />
      <Project
        title="Weather App"
        utilized="Vanilla Javascript - CSS Flexbox - animated SkyCons"
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
        text="Website desktop prototype for dental clinic. It was my first time with Adobe XD"
        utilized="Adobe XD"
      />
    </ProjectsList>
  </StyledWrapper>
)

export default ProjectList
