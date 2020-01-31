import React from "react";

class ButtonInfo extends React.Component {
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
        <>
      <div className="boxInfo">
      <button onClick={e => this.toggleBox(e)} >click me</button>
        <p style={{ display: this.state.display}}>
          this page can help you find a delicious dishes by ingredients which
          you have in your kitchen! Let's enter some product in to input
        </p>
      </div>
      </>
    );
  }
}

export default ButtonInfo;
