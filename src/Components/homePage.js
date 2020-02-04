import React, { Component } from "react";
import Header from "./header";
import Searcher from "./searchPage";


class HomePage extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div className="home__box">
        <Header />
        <Searcher/>
      </div>
    );
  }
}
export default HomePage;