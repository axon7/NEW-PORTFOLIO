import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledHeader = styled.div`
  width: 100%;
  height: 3em;
  position: fixed;
  z-index: 2;
  -webkit-box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  background: #ff9e2c;
`

const StyledBurger = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
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
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    position: relative;
    -webkit-transform-origin: 1px;
    -ms-transform-origin: 1px;
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

  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2em;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 1024px) {
    font-size: 1.2em;
    padding: 10px;
    :hover {
      -webkit-transition: 0.2s;
      -o-transition: 0.2s;
      transition: 0.2s;
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`

const StyledNav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: -webkit-flex;
  z-index: 9;
  background-color: orange;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: -webkit-transform 0.3s ease-in-out;
  -o-transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;

  /* transform: translateX(-100%); */
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

  @media (min-width: 1024px) {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 3em;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-right: 8px;
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledHeader>
      <StyledBurger
        aria-label="toggle menu"
        open={open}
        onClick={() => setOpen(!open)}
      >
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
