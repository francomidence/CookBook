import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft: '10px',
    minWidth: 120
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [cuisines, setCuisine] = React.useState('');

  const [diets, setDiet] = React.useState('');

  const [intolerances, setIntolerances] = React.useState('');

  const handleDietChange = event => {
    setDiet(event.target.value);
  };

  const handleChange = event => {
    setCuisine(event.target.value);
  };

  const handleIntolerancesChange = event => {
    setIntolerances(event.target.value);
  };

  return (
    <form onSubmit={props.getRecipe}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} zeroMinWidth>
          <Paper className={classes.paper}>
            {' '}
            <FormControl>
              <TextField
                type="text"
                id="recipeName"
                label="E.g. 3 cheese pizza"
                name="recipeName"
              ></TextField>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} zeroMinWidth>
          <Paper className={classes.paper}>
            {' '}
            <FormControl className={classes.formControl}>
              <InputLabel id="selectRecipeLabel">Cuisine Type</InputLabel>
              <Select
                labelId="cuisineLabel"
                id="cuisineSelect"
                name="cuisineSelect"
                value={cuisines}
                onChange={handleChange}
              >
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
                <MenuItem value={'Indian'}>Indian</MenuItem>
                <MenuItem value={'Italian'}>Italian</MenuItem>
                <MenuItem value={'Japanese'}>Japanese</MenuItem>
                <MenuItem value={'Mexican'}>Mexican</MenuItem>
                <MenuItem value={''}>None</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} zeroMinWidth>
          <Paper className={classes.paper}>
            {' '}
            <FormControl className={classes.formControl}>
              <InputLabel id="selectDietLabel">Diet Type</InputLabel>
              <Select
                labelId="dietLabel"
                id="dietSelect"
                name="dietSelect"
                value={diets}
                onChange={handleDietChange}
              >
                <MenuItem value={'Gluten Free'}>Gluten Free</MenuItem>
                <MenuItem value={'Ketogenic'}>Ketogenic</MenuItem>
                <MenuItem value={'Vegan'}>Vegetarian</MenuItem>
                <MenuItem value={'Whole30'}>Whole30</MenuItem>
                <MenuItem value={''}>None</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} zeroMinWidth>
          <Paper className={classes.paper}>
            {' '}
            <FormControl className={classes.formControl}>
              <InputLabel id="selectRecipeLabel">Intolerances</InputLabel>
              <Select
                labelId="intolerancesLabel"
                id="intolerancesSelect"
                name="intolerancesSelect"
                value={intolerances}
                onChange={handleIntolerancesChange}
              >
                <MenuItem value={'Dairy'}>Dairy</MenuItem>
                <MenuItem value={'Grain'}>Grain</MenuItem>
                <MenuItem value={'Soy'}>Soy</MenuItem>
                <MenuItem value={'Wheat'}>Wheat</MenuItem>
                <MenuItem value={''}>None</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
