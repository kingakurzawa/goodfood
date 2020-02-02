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
          <p style={{ display: this.state.display }}>
            this page can help you find a delicious dishes by ingredients which
            you have in your kitchen! Just enter the name of the ingredients on the search bar. 
          </p>
          <button className="buttonInfo" onClick={e => this.toggleBox(e)} aria-label="click">
            click!
          </button>
        </div>
      </>
    );
  }
}

export default ButtonInfo;
