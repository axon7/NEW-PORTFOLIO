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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const StyledIcon = styled.img`
  height: 50px;
`
const StyledIconAndText = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 33%;
`

const StyledTechnologies = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
const Technologies = () => {
  return (
    <Wrapper>
      <h2>Current stack:</h2>
      <StyledTechnologies>
        <StyledIconAndText>
          <StyledIcon src={html5} />
          <p>HTML5</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={css} />
          <p>CSS3</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={javascript} />
          <p>Javascript</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={react} />
          <p>React</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={redux} />
          <p>Redux</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={nodejs} />
          <p>Node.js</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={jest} />
          <p>Jest</p>
        </StyledIconAndText>
        <StyledIconAndText>
          <StyledIcon src={gatsby} />
          <p>Gatsby</p>
        </StyledIconAndText>
      </StyledTechnologies>
    </Wrapper>
  )
}

export default Technologies
