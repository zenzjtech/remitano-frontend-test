import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux'
import { shorten } from '../../../utils'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {},
  cardContent: {
    flexGrow: 1,
  },
}));

const MainPage = (props) => {
  const classes = useStyles()
  const { app } = props;
  const movies = app.movies || []
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item key={movie} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title="Image title"
                >
                  <iframe
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    width='100%'
                  />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="secondary"
                  >
                    { shorten(movie.snippet.title) }
                  </Typography>
                  <Typography
                    gutterBottom
                  >
                     { `Share by: ${movie.user}` }
                  </Typography>
                  <Typography
                    gutterBottom
                  >
                    Description:
                  </Typography>
                  <Typography variant="caption">
                    { shorten(movie.snippet.description) }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(MainPage)
