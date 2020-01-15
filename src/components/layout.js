import React from "react"
import { createGlobalStyle } from "styled-components"
import Footer from "./footer"
import { Link } from "gatsby"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap');
body {
    padding: 0;
    margin: 0;
    color: black;
    height: 100%;
    font-family: 'Montserrat';
  }
  html, * {
  box-sizing: border-box;
} 
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
