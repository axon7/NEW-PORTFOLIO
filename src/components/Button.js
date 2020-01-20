import styled from "styled-components"

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 23px;
  background-color: #00499b;
  -webkit-box-shadow: 0 10px 40px -15px black;
  box-shadow: 0 10px 40px -15px black;
  color: white;
  text-decoration: none;
  border-radius: 35px;

  &:hover {
    cursor: pointer;

    -webkit-transition: 0.2s;

    -o-transition: 0.2s;

    transition: 0.2s;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`

export default Button
