import React from "react"
import styled from "styled-components"

const StyledContactPage = styled.div`
  background-color: #ff9e2c;
  padding: 50px 13%;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
`

const ContactForm = styled.form`
  width: 75vw;
  max-width: 30em;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
`
const ContactInput = styled.input`
  border: 0px;
  background-color: #e8f0fe;
  margin-bottom: 10px;
  padding: 0.5rem;
  /* border-radius: 8px; */
  font-family: "Montserrat";
  ::placeholder {
    font-family: "Montserrat";
    color: black;
    font-size: 1em;
  }
`

const ContactTextarea = styled.textarea`
  background-color: #e8f0fe;
  border: 0px;
  font-family: "Montserrat";
  padding: 8px;
  line-height: 1.15;
  ::placeholder {
    font-family: "Montserrat";
    color: black;
    font-size: 1em;
  }
`

const SubmitButton = styled.button`
  height: 40px;
  margin: 20px 0;
  border: none;
  background-color: #00499b;
  box-shadow: 0 10px 40px -15px black;
  color: white;
  font-size: 1.1em;
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
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <ContactInput name="name" type="text" placeholder="Name" />
        <ContactInput name="email" type="email" placeholder="E-mail" />
        <ContactTextarea
          rows="6"
          name="message"
          required
          placeholder="Message"
        />
        <SubmitButton>SUBMIT</SubmitButton>{" "}
      </ContactForm>
    </StyledContactPage>
  )
}

export default Contact
