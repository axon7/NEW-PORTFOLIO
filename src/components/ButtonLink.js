import styled from "styled-components"

const ButtonLink = styled.a`
  margin: 20px;
  background-color: #00499b;
  box-shadow: 0 10px 40px -15px black;
  color: white;
  text-decoration: none;
  border: 3px solid orange;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  display: -webkit-flex;
  justify-content: center;
`

export default ButtonLink
