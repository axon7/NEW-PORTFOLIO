import React from "react"

const contact = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="text" name="form-name" placeholder="Your name" />
        <input name="email" type="email" placeholder="Your e-mail" />
        <textarea name="message" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default contact
