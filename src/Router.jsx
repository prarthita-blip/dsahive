import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Collections from "./Components/Collections";
import Questions from "./Components/Questions";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/questions/:sheetname" component={Questions} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
