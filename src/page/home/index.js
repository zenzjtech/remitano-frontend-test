import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Topbar from './component/Topbar'
import cst from '../../constants'
import MainPage from './component/MainPage'
import MovieSharing from './component/MovieSharing'
import './index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { page } = props;
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

const mapStateToProps = (state) => ({
  page: state.app.page,
})

export default connect(mapStateToProps)(Home)
