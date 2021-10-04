import emailjs from 'emailjs-com'
import React from 'react'
import { init } from 'emailjs-com'
init('user_1053dH7HCzeuEXyun8RPD')
import useStyles from '../utils/styles'
import Button from '@material-ui/core'

export default function ContactForm() {
  const classes = useStyles()
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_iq950vn',
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
        <form className={classes.center} onSubmit={sendEmail}>
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
          
            <Button
              type='submit'
              color='secondary'
              variant='contained'
              value='Send Message'
            >
              Submit
            </Button>
          
        </form>
      </div>
    </div>
  )
}
