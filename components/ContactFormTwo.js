// import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import { init } from 'emailjs-com'
init('user_1053dH7HCzeuEXyun8RPD')
// import useStyles from '../utils/styles'
import { Button } from '@material-ui/core/Button'
import { Container } from '@material-ui/core/Container'
import { Typography } from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
})

export default function ContactFormTwo() {
  const classes = useStyles()

  // function sendEmail(e) {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_iq950vn',
  //       'template_19euhak',
  //       e.target,
  //       'user_1053dH7HCzeuEXyun8RPD'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  //   e.target.reset()
  // }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && email && message) {
      console.log(name, email, message)
    }
  }

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a new Email Form
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          label='Name'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={classes.field}
          label='Email'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          className={classes.field}
          label='Message'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button type='submit' color='secondary' variant='contained'>
          Submit
        </Button>
      </form>
    </Container>
  )
}
