import React, { Component } from 'react'
import Recipe from './recipe';
import RecipeSearch from './recipeSearch';

export default class RecipeList extends Component {
  render() {
    return (
      <React.Fragment>
          <h1>
          hello from recipe list
          
          </h1>
          <RecipeSearch/>
          <Recipe/>
      </React.Fragment>
    )
  }
}
