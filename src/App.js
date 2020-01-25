import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Components/homePage";
import NotFoundPage from "./Components/notFound";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
