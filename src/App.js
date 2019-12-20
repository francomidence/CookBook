import React, { Component } from 'react';
import './App.css';
import Form from './Components/BasicSearch/Form';
import NavBar from './Components/UI/NavBar';
import axios from 'axios';
import Recipes from './Components/BasicSearch/Recipes';

class App extends Component {
  state = {
    apiKey: 'a22ee73466b242128615a87c1598ab5a',
    recipeList: [],
    fetching: false,
    called: false
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    const cuisine = e.target.elements.cuisineSelect.value;
    const diet = e.target.elements.dietSelect.value;
    const intolerances = e.target.elements.intolerancesSelect.value;

    console.log(cuisine);

    e.preventDefault();

    this.setState({ fetching: true });

    const req = await axios.get(
      `https://api.spoonacular.com/recipes/search?apiKey=${this.state.apiKey}&query=${recipeName}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}`
    );

    const data = req.data['results'];

    this.setState({ recipeList: data, fetching: false, called: true });

    console.log(this.state.recipeList);
  };

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Form getRecipe={this.getRecipe} />
        <Recipes
          fetching={this.state.fetching}
          recipes={this.state.recipeList}
          call={this.state.called}
        />
      </div>
    );
  }
}

export default App;
