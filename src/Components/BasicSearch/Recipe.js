import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverage';
import Fastfood from '@material-ui/icons/Fastfood';
import Grid from '@material-ui/core/Grid';
import NavBar from '../UI/NavBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotFound from '../UI/Loader';
import './Recipe.scss';

class Recipe extends Component {
  state = {
    apiKey: 'a22ee73466b242128615a87c1598ab5a',
    instructions: '',
    analyzedInstructions: [],
    data: '',
    wines: [],
    fetching: false
  };

  componentDidMount = async () => {
    const id = this.props.location.state.recipeId;

    this.setState({ fetching: true });

    const req = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.state.apiKey}`
    );

    const res = req.data;
    const analyzedInstructions = res.analyzedInstructions['0'].steps;
    const instructions = res.instructions;

    this.setState({
      instructions,
      analyzedInstructions: analyzedInstructions,
      data: res,
      wines: res.winePairing.pairedWines,
      fetching: false
    });

    if (Object.entries(res.winePairing).length === 0) {
      console.log('its empty');
    }

    console.log(this.state.data.image);
    console.log(analyzedInstructions);
  };
  render() {
    const recipe = this.state.data;
    const wines = this.state.wines;
    const analyzedInstructions = this.state.analyzedInstructions;

    if (this.state.fetching) {
      return <NotFound />;
    }

    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} zeroMinWidth className="paper">
            <Card key={recipe.id}>
              <CardHeader />
              <CardMedia
                className="media"
                image={recipe.image}
                title={recipe.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4} zeroMinWidth className="paper">
            <Typography className="h1" component="h2" variant="h2" gutterBottom>
              {recipe.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} zeroMinWidth className="paper">
            <Typography className="h1" component="h3" variant="h3" gutterBottom>
              Recommended Wines
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
              {wines.map(wine => (
                <ListItem button>
                  <ListItemIcon>
                    <EmojiFoodBeverage />
                  </ListItemIcon>
                  <ListItemText primary={wine} />
                </ListItem>
              ))}
            </List>

            <List component="nav" aria-label="main mailbox folders">
              {wines.map(wine => (
                <ListItem button>
                  <ListItemIcon>
                    <EmojiFoodBeverage />
                  </ListItemIcon>
                  <ListItemText primary={wine} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={8} zeroMinWidth className="paper">
            <List component="nav" aria-label="main mailbox folders">
              {analyzedInstructions.map(instruction => (
                <ListItem button>
                  <ListItemIcon>
                    <Fastfood />
                  </ListItemIcon>
                  <ListItemText primary={instruction.step} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Recipe;
