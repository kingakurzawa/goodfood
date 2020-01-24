import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
import "../scss/searchPage.scss";

const Searcher = () => {
  const APP_ID = "42af88ff";
  const APP_KEY = "7c0c4172dfdd444e9a1822e1f76a2401";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <>
      <div>
        <Link to="/" className="backToHomePage-btn">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <button></button>
      </div>
      <div className="search">
        <h1 className="search-title">Let's find a delicious recipe!</h1>
        <form className="search__form" onSubmit={getSearch}>
          <input
            type="text"
            placeholder="enter one ingredient"
            className="search__form-bar"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="search__form-btn">
            <i className="fas fa-utensils"></i>
            Search
          </button>
        </form>
        <div className="search__recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              calories={recipe.recipe.calories}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Searcher;
