import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function Recipe(props) {
  // var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <img
        className="recipe-img"
        src={props.image}
        alt={props.title}
      />
<button onClick={openModal}><h1 className="recipe-title">{props.title}</h1></button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="recipe__details">
          <p className="recipe-paragraph"> kcal</p>
          <ul className="recipe__details__list">
            {props.ingredients.map(ingredient => (
              <li className="recipe__details__list-item" key={props.key}>
                {ingredient.text}
              </li>
            ))}
          </ul>
          <a href={props.url} rel="noopener noreferrer" target="_blank">
            show more
          </a>
        </div>
      </Modal>
    </div>
  );
}

// class Recipe extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: "none"
//     };
//   }

//   cal = Math.floor(this.props.calories) / 5;

//   toggleBox() {
//     this.setState({
//       display: this.state.display === "none" ? "flex" : "none"
//     });
//   }

//   render() {
//     return (
//       <div className="recipe" onClick={e => this.toggleBox(e)}>
//         <img
//           className="recipe-img"
//           src={this.props.image}
//           alt={this.props.title}
//         />
//         <h1 className="recipe-title">{this.props.title}</h1>
//         <div
//           className="recipe__details"
//           style={{ display: this.state.display }}
//         >
//           <p className="recipe-paragraph">{this.cal} kcal</p>
//           <ul className="recipe__details__list">
//             {this.props.ingredients.map(ingredient => (
//               <li className="recipe__details__list-item" key={this.props.key}>
//                 {ingredient.text}
//               </li>
//             ))}
//           </ul>
//           <a href={this.props.url} rel="noopener noreferrer" target="_blank">
//             show more
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

export default Recipe;
