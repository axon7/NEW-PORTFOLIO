import styled from "styled-components"

const ButtonLink = styled.a`
  margin: 20px;
  background-color: #00499b;
  -webkit-box-shadow: 0 10px 40px -15px black;
  box-shadow: 0 10px 40px -15px black;
  color: white;
  text-decoration: none;
  border: 3px solid orange;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export default ButtonLink
