import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Searcher = () => {
  const APP_ID = "42af88ff";
  const APP_KEY = "7c0c4172dfdd444e9a1822e1f76a2401";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [displayFormat, setDisplay] = useState("none");

  useEffect(() => {
    getRecipes();
  }, [query]);

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
    }, 1000);
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
      <div className="search" id="search">
        <form className="search__form" onSubmit={getSearch}>
          <input
            type="text"
            placeholder="enter ingredients"
            className="search__form-bar"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="search__form-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
            </svg>
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
      <button className="toUp" style={{ display: displayFormat }}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Searcher;
