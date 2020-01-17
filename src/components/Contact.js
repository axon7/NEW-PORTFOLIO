import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledContactPage = styled.div`
  background-color: #ff9e2c;
  padding: 50px 13%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactForm = styled.form`
  width: 75vw;
  max-width: 30em;
  display: flex;
  flex-direction: column;
`
const ContactInput = styled.input`
  border: 2px solid #00499b;
  margin-bottom: 10px;
  padding: 0.5rem;
  border-radius: 8px;
`

const ContactTextarea = styled.textarea`
  border: 2px solid #00499b;
  line-height: 1.15;
  border-radius: 8px;
`

const SubmitButton = styled.button`
  height: 40px;
  margin: 20px 0;
  border: none;
  background-color: #00499b;
  box-shadow: 0 10px 40px -15px black;
  color: white;
  &:hover {
    cursor: pointer;
  }
  font-family: "Montserrat";
  border-radius: 35px;
`

const Contact = () => {
  return (
    <StyledContactPage>
      <h1 id="contact">Contact</h1>
      <p>Wanna talk? Send me an email through the form below 😉</p>
      <ContactForm
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label htmlFor="name">Name</label>
        <ContactInput type="text" name="form-name" />
        <label>Your e-mail</label>
        <ContactInput name="email" type="email" />
        <label>Message</label>
        <ContactTextarea rows="8" name="message" required />
        <SubmitButton>SUBMIT</SubmitButton>
      </ContactForm>
    </StyledContactPage>
  )
}

export default Contact
