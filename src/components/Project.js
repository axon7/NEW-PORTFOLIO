import React from "react"
import styled from "styled-components"
import ButtonLink from "./ButtonLink"
const ProjectLink = styled.a`
  margin-bottom: 2rem;
  margin-top: 20px;

  :hover {
    opacity: 0.6;
    transition: 0.2s;
    transform: scale(0.98);
  }

  @media (min-width: 1024px) {
    margin-left: 20px;
    width: 65%;
  }
`

const ProjectCard = styled.div`
  background: #00499b;
  color: white;
  font-size: 14px;
  padding: 10%;
  margin-bottom: 50px;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media (min-width: 1024px) {
    padding: 10px 31px;
  }
`

const Description = styled.p`
  margin-bottom: 30px;
  line-height: 1.5em;
  text-align: justify;
  max-width: 500px;

  @media (min-width: 1024px) {
    font-size: 1.1em;
  }
`
const Utilized = styled.p`
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1em;
  }
`

const Image = styled.img`
  box-shadow: 0px 12px 9px 0px rgba(0, 0, 0, 0.33);
  width: 100%;
`

const ImageAndText = styled.div`
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    display: flex;
  }
`
const Project = props => (
  <>
    <ProjectCard id="projects">
      <h1 style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        {props.title}
      </h1>
      <ImageAndText>
        <ProjectLink href={props.link}>
          <Image src={props.image} alt="implanty" />
        </ProjectLink>
        <div>
          <Description>{props.text}</Description>
          <Utilized>{props.utilized}</Utilized>
          {props.linkGithub ? (
            <ButtonLink href={props.linkGithub}>GITHUB</ButtonLink>
          ) : null}

          {props.link ? (
            <ButtonLink href={props.link}>LIVE DEMO</ButtonLink>
          ) : null}
        </div>
      </ImageAndText>
    </ProjectCard>
  </>
)

export default Project
