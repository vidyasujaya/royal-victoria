import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Resources } from "./Resources";
import { NoMatch } from "./NoMatch";

export const RouterComponent = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resources" component={Resources} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
