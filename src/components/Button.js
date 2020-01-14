import styled from "styled-components"

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px;
  background-color: #00499b;
  box-shadow: 0 10px 40px -15px black;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export default Button
