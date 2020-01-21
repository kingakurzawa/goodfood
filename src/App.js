import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Searcher from "./Components/searchPage";
import HomePage from "./Components/homePage";
import AllRecipes from "./Components/allRecipes";
import NotFoundPage from "./Components/notFound";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={Searcher} />
          <Route path="/allRecipes" component={AllRecipes} />
          <Route component={NotFoundPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
