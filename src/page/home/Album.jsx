import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Topbar from './Topbar'
import { appAction } from '../../actions/app.action'
import { connect } from 'react-redux'
import cst from '../../constants'
import MainPage from './MainPage'
import MovieSharing from './MovieSharing'
import './index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const Album = (props) => {
  const classes = useStyles();
  const {page, switchPage} = props;
  return (
    <div
      className={classes.root}
    >
      <Topbar />
      {page === cst.PAGE_HOME && <MainPage /> }
      {page === cst.PAGE_SEARCH && <MovieSharing /> }
    </div>
  );
}

const mapStateToProps = state => ({
  page: state.app.page
})

function mapDispatchToProps(dispatch) {
  return {
    switchPage: (page) => dispatch(appAction.switchPage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
