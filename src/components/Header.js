import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 2;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  background: #ff9e2c;
  /* background-color: black; */
`
const ToggleMenuLine = styled.div`
  width: 30px;
  height: 4px;
  background-color: white;
  margin-top: 4px;
  border-radius: 100px;
`

const ToggleMenu = styled.a`
  width: 30px;
  height: 22px;
  right: 12px;
  top: 11px;
  position: absolute;
  color: white;
`
const StyledBurger = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  /* display: none; */
  z-index: 9;
  background-color: orange;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* transform: translateX(-100%); */
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledHeader>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {/* <ToggleMenu>
        <ToggleMenuLine></ToggleMenuLine>
        <ToggleMenuLine></ToggleMenuLine>
        <ToggleMenuLine></ToggleMenuLine>
      </ToggleMenu> */}
      <StyledNav open={open}>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
