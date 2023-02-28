import React from 'react'

export default function Contact() {

  return (
    <div id='contactContainer' >
        <div id="contact" data-aos="fade-up">
            <div>
                <h2>Contact Us:</h2>
                <p>For question(s), booking, pricing or enquiries,</p>
                <p>Feel the form to reach us! Our Customer Support Team will be sure you get a response in due time! </p>
            </div>

            <form method='POST' data-aos="fade-down">
                <input name="full name" type="text" placeholder='Full Name' required/>
                <input name="email" type="email" placeholder='your-email@mail.com' required/>
                <input name='subject' type="text" placeholder='Subject/Title of Message' required/>
                <textarea name="message" id="" cols="30" rows="5" placeholder='...type your message' required/>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    </div> 
  )
}
