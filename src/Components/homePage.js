import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-shadow"></div>
      <div className="home__box">
        <h1 className="home__box-title">Find the best dish and...</h1>
        <p className="home__box-paragraph">make your day happier</p>
        <div className="home__buttonsBox">
          <Link to="/search">
            <button className="home__buttonsBox-searchBtn">search</button>
          </Link>
          <Link to="/allRecipes">
            <button className="home__buttonsBox-allRecipesBtn">
              all recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
