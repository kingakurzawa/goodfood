import React from "react";
import "./recipe.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
    };
  }

  toggleBox() {
    this.setState({
      display: this.state.display === "none" ? "block" : "none"
    });
  }

  render() {
    return (
      <div className="recipe">
        <h1 className="recipe-title">{this.props.title}</h1>
        <button onClick={e => this.toggleBox(e)}>
          <img
            className="recipe-img"
            src={this.props.image}
            alt={this.props.title}
          />
        </button>
        <p className="recipe-paragraph">{this.props.calDivision} kcal</p>
        <div
          className="recipe__details"
          style={{ display: this.state.display }}
        >
          <ul className="recipe__details__list">
            {this.props.ingredients.map(ingredient => (
              <li className="recipe__details__list-item" key={this.props.key}>
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
// const Recipe = ({ title, calories, image, ingredients, key }) => {
//   const cal = Math.floor(calories);
//   const calDivision = cal / 8;

//   return (
//     <div className="recipe">
//       <h1 className="recipe-title">{title}</h1>
//       <button>
//         <img className="recipe-img" src={image} alt={title} />
//       </button>
//       <p className="recipe-paragraph">{calDivision} kcal</p>
//       <div className="recipe__details">
//         <ul className="recipe__details__list">
//           {ingredients.map(ingredient => (
//             <li className="recipe__details__list-item" key={key}>
//               {ingredient.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

export default Recipe;
