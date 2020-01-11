import React from "react"
import styled from "styled-components"
import ButtonLink from "./ButtonLink"
const ProjectLink = styled.a`
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

const ProjectCard = styled.div`
  background: #00499b;
  color: white;
  font-size: 14px;
  padding: 10%;
  margin-bottom: 50px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const Description = styled.p`
  margin-bottom: 50px;
`
const Project = props => (
  <>
    <ProjectCard>
      <h1>{props.title}</h1>
      <ProjectLink href={props.link}>
        <img
          src={props.image}
          alt="implanty"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </ProjectLink>
      <Description>{props.text}</Description>
      <ButtonLink href={props.linkGithub}>GITHUB</ButtonLink>
      <ButtonLink href={props.linkGithub}>LIVE DEMO</ButtonLink>
    </ProjectCard>
  </>
)

export default Project
