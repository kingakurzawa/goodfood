import React from "react";
import { Link } from "react-router-dom";

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
      <footer className="home__footer">
        created with passion <i class="fas fa-utensils"></i>
      </footer>
    </section>
  );
};

export default HomePage;
