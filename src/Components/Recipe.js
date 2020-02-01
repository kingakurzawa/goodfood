import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
    };
  }

  cal = Math.floor(this.props.calories) / 5;

  toggleBox() {
    this.setState({
      display: this.state.display === "none" ? "flex" : "none"
    });
  }

  render() {
    return (
      <div className="recipe" onClick={e => this.toggleBox(e)}>
        <img
          className="recipe-img"
          src={this.props.image}
          alt={this.props.title}
        />
        <h1 className="recipe-title">{this.props.title}</h1>
        <div
          className="recipe__details"
          style={{ display: this.state.display }}
        >
          <p className="recipe-paragraph">{this.cal} kcal</p>
          <ul className="recipe__details__list">
            {this.props.ingredients.map(ingredient => (
              <li className="recipe__details__list-item" key={this.props.key}>
                {ingredient.text}
              </li>
            ))}
          </ul>
          <a href={this.props.url} rel="noopener noreferrer" target="_blank">
            show more
          </a>
        </div>
      </div>
    );
  }
}

export default Recipe;
