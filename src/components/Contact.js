import React from "react"
import styled from "styled-components"

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
      <p>
        Wanna talk? Send me an email through the form below{" "}
        <span role="img" aria-label="blink emoji">
          😉
        </span>
      </p>
      <ContactForm
        action="/thank-you"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <ContactInput type="text" name="form-name" />
        <label htmlFor="e-mail">Your e-mail</label>
        <ContactInput name="email" type="email" />
        <label htmlFor="message">Message</label>
        <ContactTextarea rows="8" name="message" required />
        <SubmitButton>SUBMIT</SubmitButton>
      </ContactForm>
    </StyledContactPage>
  )
}

export default Contact
