import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  const cal = Math.floor(calories);
  const calDivision = cal / 8;
  return (
    <div className={style.recipe}>
      <h1 className={style.recipeTitle}>{title}</h1>
      <p>{calDivision} kcal</p>
      <div className={style.recipeBox}>
        <ul className={style.recipeList}>
          {ingredients.map(ingredient => (
            <li className={style.recipeItems}>{ingredient.text}</li>
          ))}
        </ul>
        <img className={style.image} src={image} alt="" />
      </div>
    </div>
  );
};
export default Recipe;

//key={ingredient.weight}
