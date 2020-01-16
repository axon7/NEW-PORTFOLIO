import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./footer"
import Header from "./Header"

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

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyle />

      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  )
}

export default Layout
