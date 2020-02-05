import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import ButtonInfo from "./buttonInfo";
import smoothscroll from "smoothscroll-polyfill";

const Searcher = () => {
  const APP_ID = "42af88ff";
  const APP_KEY = "7c0c4172dfdd444e9a1822e1f76a2401";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("oil");
  const [displayFormat, setDisplay] = useState("none");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const scrollFunc = e => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    smoothscroll.polyfill();
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);

    setTimeout(() => {
      if (data.hits.length >= 2) {
        return setDisplay("block");
      } else {
        return setDisplay("none");
      }
    }, 500);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const checkValueInSearchBar = e => {
    if (search === "") {
      return setQuery("vegetarian");
    } else {
      return setQuery(search);
    }
  };
  return (
    <>
      <div className="search" id="search">
        <form className="search__form" onSubmit={getSearch}>
          <input
            type="text"
            placeholder="type ingredient or click loupe"
            className="search__form-bar"
            value={search}
            onChange={updateSearch}
          />
          <button
            type="submit"
            className="search__form-btn"
            aria-label="search"
            onClick={checkValueInSearchBar}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        <ButtonInfo />
        <div className="search__recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              calories={recipe.recipe.calories}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          ))}
        </div>
      </div>
      <button
        className="buttonToUp"
        style={{ display: displayFormat }}
        onClick={scrollFunc}
        aria-label="back to up"
      >
        back to up
      </button>
    </>
  );
};

export default Searcher;
