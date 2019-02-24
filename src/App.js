import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/recipeList";
import RecipeDetails from "./components/recipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=7f3620973180a4b890021a6aec83e0da",
    details_id: 35375
  };
  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </React.Fragment>
    );
  }
}

export default App;
