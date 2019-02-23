import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/recipeList";
import RecipeDetails from "./components/recipeDetails";

class App extends Component {
  state = {
    recipes: [],
    url:
      "https://www.food2fork.com/api/search?key=7f3620973180a4b890021a6aec83e0da"
  };
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getRecipes();
  }

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
