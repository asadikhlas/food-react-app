import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/recipeList';
import RecipeDetails from './components/recipeDetails';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <RecipeList/>
      <RecipeDetails/>
      </React.Fragment>
    );
  }
}

export default App;
