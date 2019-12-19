import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Visibility from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import '../../style/image.scss';

const BASE_IMG_URL = 'https://spoonacular.com/recipeImages/';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  },
  paper: {
    padding: theme.spacing(3, 2),
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  }
}));

export default function Recipes(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {props.recipes.map(recipe => {
        return (
          <Grid item xs={12} md={3} zeroMinWidth>
            <Card key={recipe.id} className={classes.paper}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={recipe.title}
              />

              <CardMedia
                className={classes.media}
                image={`${BASE_IMG_URL + recipe.image}`}
                title={recipe.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ready in {recipe.readyInMinutes} minutes
                  <br></br>
                  {recipe.servings} servings
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Link
                  to={{
                    pathname: `/recipe/${recipe.id}`,
                    state: { recipeId: recipe.id }
                  }}
                >
                  <IconButton aria-label="share">
                    <Visibility />
                  </IconButton>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
