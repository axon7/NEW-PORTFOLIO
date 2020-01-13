import React from "react"
import styled from "styled-components"

import html5 from "../images/logos/html5.svg"
import css from "../images/logos/css.svg"
import javascript from "../images/logos/javascript.svg"
import react from "../images/logos/react.svg"
import redux from "../images/logos/redux.svg"
import nodejs from "../images/logos/nodejs.svg"

const Wrapper = styled.div`
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
      <h3>Current Technologies stack:</h3>
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
      </StyledTechnologies>
    </Wrapper>
  )
}

export default Technologies
