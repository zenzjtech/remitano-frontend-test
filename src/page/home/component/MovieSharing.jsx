// @flow
import * as React from 'react'
import { useSnackbar } from 'notistack';
import FormControl from '@material-ui/core/FormControl'
import { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { appAction } from '../../../actions/app.action'
import { formError } from '../../../utils'
import cst from '../../../constants'

const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: theme.spacing(4),
    width: '60%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const MovieSharing = (props) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar();
  const { getMovieInfo, switchPage } = props;
  const [url, setUrl] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await getMovieInfo(url)
      enqueueSnackbar('Successfully add movie data', { variant: 'info' })
      switchPage(cst.PAGE_HOME)
    } catch (err) {
      enqueueSnackbar(formError(err, 'Fail to load youtube movie'))
    }
  }
  return (
    <Box
      display="fex"
      flexDirection="column"
      justify="center"
      alignItems="center"
      flexGrow={1}
      mb={8}
    >
      <Container
        flexGrow={1}
        maxWidth="sm"
        component={Box}
        pb={6}
        boxShadow={10}
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
    </Box>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getMovieInfo: (url) => dispatch(appAction.getMovieInfo(url)),
  switchPage: (page) => dispatch(appAction.switchPage(page)),
})

export default connect(undefined, mapDispatchToProps)(MovieSharing)
