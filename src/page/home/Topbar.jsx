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

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
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

const Topbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <HomeIcon className={classes.icon} />
        <Typography variant="h2" color="inherit" noWrap className={classes.title}>
          Funny Movies
        </Typography>
        <>
          <InputBase
            className={classes.icon}
            placeholder="Email"
            type="email"
            /* onChange={(e) => setSearch(e.target.value)}
            value={search} */
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <InputBase
            className={classes.icon}
            placeholder="password"
            type="password"
            /* onChange={(e) => setSearch(e.target.value)}
            value={search} */
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <Button color="inherit">Login / Register </Button>
        </>
        <>
          <Typography
            variant="h6"
          >
            Welcome
          </Typography>
          <Button>
            Share a movie
          </Button>
          <Button>
            Logout
          </Button>
        </>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  ...state.auth
});

export default connect(mapStateToProps, undefined)(Topbar);
