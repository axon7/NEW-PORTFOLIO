import React from "react"
import styled from "styled-components"

import html5 from "../images/logos/html5.svg"
import css from "../images/logos/css.svg"
import javascript from "../images/logos/javascript.svg"
import react from "../images/logos/react.svg"
import redux from "../images/logos/redux.svg"
import nodejs from "../images/logos/nodejs.svg"
import jest from "../images/logos/jest.svg"
import gatsby from "../images/logos/gatsby.svg"
const Wrapper = styled.section`
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
`

const StyledIcon = styled.img`
  height: 50px;
`
const StyledIconAndText = styled.div`
  margin: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 33%;

  @media (min-width: 768px) {
    width: 20%;
  }
`

const StyledTechnologies = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`
const Title = styled.p`
  margin-top: 10px;
  font-weight: 600;
`
const Technologies = () => {
  return (
    <Wrapper>
      <h2>Current stack:</h2>
      <StyledTechnologies>
        <StyledIconAndText>
          <StyledIcon src={html5} alt="HTML5" />
          <Title>HTML5</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={css} alt="CSS3" />
          <Title>CSS3</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={javascript} alt="Javascript" />
          <Title>Javascript</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={react} alt="React" />
          <Title>React</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={redux} alt="Redux" />
          <Title>Redux</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={nodejs} alt="Node.js" />
          <Title>Node.js</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={jest} alt="Jest" />
          <Title>Jest</Title>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={gatsby} alt="Gatsby" />
          <Title>Gatsby</Title>
        </StyledIconAndText>
      </StyledTechnologies>
    </Wrapper>
  )
}

export default Technologies
