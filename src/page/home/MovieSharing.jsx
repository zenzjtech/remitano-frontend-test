// @flow
import * as React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import { colors } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: theme.spacing(4),
    width: '60%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export const MovieSharing = () => {
  const classes = useStyles()
  const [url, setUrl] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <main>
      <Container
        maxWidth="sm"
        component={Box}
        pb={4}
        boxShadow={24}
        bgcolor="background.paper"
      >
        <InputLabel htmlFor="url">Share a youtube movie</InputLabel>
        <FormControl
          id="url"
          component="form"
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <TextField
            variant="standard"
            label="Youtube movie url"
            className={classes.item}
            value={url}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            className={classes.item}
            type="submit"
          >
            Share
          </Button>
        </FormControl>
      </Container>
    </main>
  )
}
