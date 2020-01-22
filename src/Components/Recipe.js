import React from "react";
import "./recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  const cal = Math.floor(calories);
  const calDivision = cal / 8;
  return (
    <div className="recipe">
      <h1 className="recipe-title">{title}</h1>
      <img className="recipe__details-img" src={image} alt="" />
      <p className="recipe-paragraph">{calDivision} kcal</p>
      <div className="recipe__details">
        <ul className="recipe__details__list" key={ingredients.title}>
          {ingredients.map(ingredient => (
            <li className="recipe__details__list-item" key={ingredient}>
              {ingredient.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Recipe;

//key={ingredient.weight}
