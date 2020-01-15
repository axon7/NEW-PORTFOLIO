import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import { Link } from "gatsby"

const StyledContactPage = styled.div`
  background-color: #ff9e2c;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`

const ContactTextarea = styled.textarea`
  border: 2px solid #00499b;
  line-height: 1.15;
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
`

const contact = () => {
  return (
    <StyledContactPage>
      <Layout>
        <SEO title="contact" />
        <h1>Contact</h1>
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
          <ContactTextarea rows="6" name="message" />
          <SubmitButton>SUBMIT</SubmitButton>
          <Link to="/">Go back</Link>
        </ContactForm>
      </Layout>
    </StyledContactPage>
  )
}

export default contact
