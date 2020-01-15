import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  background-color: #ff9e2c;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  flex-direction: column;
`

const Contact = () => {
  return (
    <StyledDiv>
      <Button as={Link} to="/contact">
        CONTACT ME
      </Button>
    </StyledDiv>
  )
}

export default Contact
