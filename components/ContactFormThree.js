import emailjs from 'emailjs-com'
import React from 'react'
import { init } from 'emailjs-com'
init('user_1053dH7HCzeuEXyun8RPD')
import useStyles from '../utils/styles'
import { Container } from '@material-ui/core'

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
    <Container>
      <br />
      <h3>Please feel free to email me with any questions</h3>
      <br />
      <div className={classes.container}>
        <form className={classes.center} onSubmit={sendEmail}>
          <div className={classes.button2}>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
            />
          </div>
          <div className={classes.button2}>
            <input
              type='text'
              className='form-control'
              placeholder='Email'
              name='email'
            />
          </div>
          <div className={classes.button2}>
            <input
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
            />
          </div>
          <div className={classes.button2}>
            <textarea
              className='form-control'
              id=''
              cols='17'
              rows='8'
              placeholder='Your Message'
              name='message'
            ></textarea>
          </div>
          <div className={classes.button2}>
            <input
              type='submit'
              className='btn btn-info'
              value='Send Message'
            />
          </div>
        </form>
      </div>
    </Container>
  )
}
