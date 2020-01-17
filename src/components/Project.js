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
  border-radius: 15px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const Description = styled.p`
  margin-bottom: 30px;
  line-height: 1.5em;
  text-align: justify;
`
const Utilized = styled.p`
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: center;
`

const Image = styled.img`
  box-shadow: 0px 12px 9px 0px rgba(0, 0, 0, 0.33);
  width: 100%;
  max-width: 500px;
`
const Project = props => (
  <>
    <ProjectCard id="projects">
      <h1 style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        {props.title}
      </h1>
      <ProjectLink href={props.link}>
        <Image src={props.image} alt="implanty" />
      </ProjectLink>
      <Description>{props.text}</Description>
      <Utilized>{props.utilized}</Utilized>
      <ButtonLink href={props.linkGithub}>GITHUB</ButtonLink>
      <ButtonLink href={props.linkGithub}>LIVE DEMO</ButtonLink>
    </ProjectCard>
  </>
)

export default Project
