import emailjs from 'emailjs-com'
import React from 'react'
import { init } from 'emailjs-com'
init('user_1053dH7HCzeuEXyun8RPD')
// import useStyles from '../utils/styles'
import { Container, Typography, TextField, Button } from '@mui/material'

export default function ContactForm() {
  // const classes = useStyles()
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

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (name && email && message) {
  //     console.log(name, email, message)
  //   }
  // }

  return (
    <Container>
      <Typography
        style={{ marginLeft: '12px', marginTop: '38px' , fontSize: '1.3rem'}}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Please feel free to contact me.
      </Typography>

      <form noValidate autoComplete='off' onSubmit={sendEmail}>
        <TextField
          // onChange={(e) => setName(e.target.value)}
          style={{ padding: '14px 12px', margin: '4px' }}
          label='Name'
          name='name'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
        <TextField
          // onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '14px 12px', fontSize: '1.2rem' }}
          label='Email'
          name='email'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
        <TextField
          // onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '14px 12px', }}
          label='Subject'
          name='subject'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
        <TextField
          // onChange={(e) => setMessage(e.target.value)}
          style={{ padding: '14px 12px' }}
          label='Message'
          name='message'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button
          onSubmit={sendEmail}
          style={{ padding: '14px 12px', marginLeft: '8px', marginBottom: '50px' }}
          type='submit'
          color='secondary'
          variant='contained'
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
