import React from 'react'
import Readmore from './Readmore'

const ContactForm = () => {
  return (
    <form>
    <h4>Make enquiry</h4>

    <div className="input-control">
      <input type="text" id="email" placeholder="" />
      <label htmlFor="email">Email</label>
    </div>

    <div className="input-control">
      <input type="text" id="subject" placeholder="" />
      <label htmlFor="subject">Subject</label>
    </div>

    <textarea name="" id=""></textarea>

    <Readmore name="Read more">Send</Readmore>
  </form>
  )
}

export default ContactForm