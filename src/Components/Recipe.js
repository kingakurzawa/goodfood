import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "60%",
    width: "80%",
    padding: "1rem",
    transform: "translate(-50%, -50%)"
  }
};

const Recipe = props => {
  const cal = Math.floor(props.calories) / 5;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="recipe">
      <img className="recipe-img" src={props.image} alt={props.title} />
      <button onClick={openModal} className="recipe__buttonOpenModal">
        {props.title}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp = {false}
        contentLabel="Example Modal"
      >
        <div className="recipe__modal__details">
          <button
            onClick={closeModal}
            className="recipe__modal__details-buttonCloseModal"
          >
            X
          </button>
          <p className="recipe__modal__details-calories">{cal} kcal</p>
          <ul className="recipe__modal__details__list">
            {props.ingredients.map((ingredient, id)=> (
              <li className="recipe__modal__details__list-item" key={id}>
                {ingredient.text}
              </li>
            ))}
          </ul>
          <a
            href={props.url}
            className="recipe__modal__details-url"
            rel="noopener noreferrer"
            target="_blank"
          >
            show more
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Recipe;
