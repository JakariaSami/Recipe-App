import React from 'react';
import Recipe from './Recipe';

class MainComponent2 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      recipes: [],
      search: '',
      topic: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.topicHandler = this.topicHandler.bind(this);
    this.API_REQUEST = this.API_REQUEST.bind(this);
  }

  API_REQUEST() {
    var APP_ID = '704443ea';
    var APP_KEY = '9aefce29f832ee0777e4b99d7ac63330';
    fetch(
      `https://api.edamam.com/search?q=${this.state.topic}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          recipes: data.hits,
        });
      });
  }

  searchHandler(event) {
    this.setState({
      search: event.target.value,
    });
  }

  topicHandler(event) {
    event.preventDefault();
    this.setState({
      topic: this.state.search,
    });
    if (this.state.search) {
      this.API_REQUEST();
    }
  }
  render() {
    const { recipes } = this.state;
    return (
      <div className='app'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search food'
            className='search-bar'
            value={this.state.search}
            onChange={this.searchHandler}
          />
          <button
            className='search-button'
            type='submit'
            onClick={this.topicHandler}>
            Search
          </button>
        </form>
        <div className='recipes'>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainComponent2;
