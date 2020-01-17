import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 2;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  background: #ff9e2c;
  /* background-color: black; */
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
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      display: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2em;
  margin: 10px;
  font-weight: bold;
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
  transition: transform 0.3s ease-in-out;

  /* transform: translateX(-100%); */
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
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

      <StyledNav open={open}>
        <StyledLink
          onClick={() => setOpen(!open)}
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </StyledLink>
        <StyledLink
          onClick={() => setOpen(!open)}
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </StyledLink>

        <StyledLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => setOpen(!open)}
        >
          Contact
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
