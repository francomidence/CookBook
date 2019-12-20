import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    maxHeight: 600
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  paper: {
    padding: theme.spacing(3, 2),
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  grid: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginTop: '15%'
  }
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid className={classes.grid} item xs={12} md={12} lg={12} zeroMinWidth>
        <CircularProgress size={'15rem'} />
      </Grid>
    </Grid>
  );
}
