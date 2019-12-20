import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import '../../style/image.scss';

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

export default function Cards() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} zeroMinWidth>
        <Card className={classes.paper}>
          <CardHeader />

          <CardMedia
            className={classes.media}
            image="https://n6s6b6w9.stackpathcdn.com/client/w_710,q_lossy,ret_wait/https://appgrooves.com/cdn/lifegoal/220/e/53014-45519-56524-56048_w1200.png"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Get an awesome recipe in under a minute!
            </Typography>
          </CardContent>

          <CardActions disableSpacing></CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} zeroMinWidth>
        <Card className={classes.paper}>
          <CardHeader />

          <CardMedia
            className={classes.media}
            image="https://lithub.com/wp-content/uploads/2019/07/used-books-store-2.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              From the worlds biggest recipe database with over 350,000+
            </Typography>
          </CardContent>

          <CardActions disableSpacing></CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} zeroMinWidth>
        <Card className={classes.paper}>
          <CardHeader />

          <CardMedia
            className={classes.media}
            image="http://www.cookfineart.net/wp-content/uploads/2017/11/Men-should-Learn-to-Cook.png"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Detailed instructions and easy to follow!
            </Typography>
          </CardContent>

          <CardActions disableSpacing></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
