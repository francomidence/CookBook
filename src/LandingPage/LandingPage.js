import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../Components/UI/NavBar';
import Image from './Components/Image';
import Cards from './Components/Cards';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: 'white'
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar></AppBar>
      <Image></Image>
      <Cards></Cards>
    </div>
  );
}
