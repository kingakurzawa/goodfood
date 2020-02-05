import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Lines } from "react-preloaders";
import HomePage from "./Components/homePage";
import NotFoundPage from "./Components/notFound";

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </HashRouter>
      <Lines color="#fff " background="blur" time={1000} />
    </>
  );
};
export default App;
