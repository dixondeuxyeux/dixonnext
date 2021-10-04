import emailjs from 'emailjs-com'
import React from 'react'
import { init } from 'emailjs-com'
init('user_1053dH7HCzeuEXyun8RPD')

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_19euhak',
        e.target,
        'user_1053dH7HCzeuEXyun8RPD'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='col-8 form-group mx-auto'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
            />
          </div>
          <div className='col-8 form-group mx-auto'>
            <input
              type='text'
              className='form-control'
              placeholder='Email Address'
              name='email'
            />
          </div>
          <div className='col-8 form-group mx-auto'>
            <input
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
            />
          </div>
          <div className='col-8 form-group mx-auto'>
            <textarea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              placeholder='Your Message'
              name='message'
            ></textarea>
          </div>
          <div className='col-8 form-group mx-auto'>
            <input
              type='submit'
              className='btn btn-info'
              value='Send Message'
            ></input>
          </div>
        </form>
      </div>
    </div>
  )
}
