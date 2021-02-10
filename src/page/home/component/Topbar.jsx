// @flow
import * as React from 'react';
import {
  makeStyles,
  AppBar, Toolbar,
  Typography, Button, TextField, InputAdornment,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import { useState } from 'react'
import { appAction } from '../../../actions'
import cst from '../../../constants'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function isLogin(app) {
  return app.user !== undefined
}

const Topbar = (props) => {
  const {
    app, login, logout, switchPage,
  } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    login(email, password)
  }
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <HomeIcon className={classes.icon} onClick={() => switchPage(cst.PAGE_HOME)} />
        <Typography
          variant="h2"
          component="a"
          onClick={() => switchPage(cst.PAGE_HOME)}
          color="inherit"
          noWrap
          className={classes.title}
        >
          Funny Movies
        </Typography>
        {!isLogin(app) && (
        <form
          onSubmit={handleSubmit}
        >
          <InputBase
            className={classes.icon}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <InputBase
            className={classes.icon}
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <Button
            color="inherit"
            type="submit"
          >
            Login / Register
          </Button>
        </form>
        ) }
        {isLogin(app)
        && (
        <>
          <Typography
            variant="h6"
          >
            Welcome
            {' '}
            {app.user.email}
          </Typography>
          <Button
            color="inherit"
            onClick={() => switchPage(cst.PAGE_SEARCH)}
          >
            Share a movie
          </Button>
          <Button
            color="inherit"
            onClick={() => logout(email)}
          >
            Logout
          </Button>
        </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  app: state.app,
});

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(appAction.login(email, password)),
    logout: (email) => dispatch(appAction.logout(email)),
    switchPage: (page) => dispatch(appAction.switchPage(page)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
