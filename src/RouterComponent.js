import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { OpenLetter } from "./pages/OpenLetter";
import { Connect } from "./pages/Connect";
import { Resources } from "./pages/Resources";
import { NoMatch } from "./pages/NoMatch";
import { Nothing } from "./pages/Nothing";
import { Research } from "./pages/Research";
import { History } from "./pages/History";
import { March } from "./pages/March";

export const RouterComponent = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={History} />
        <Route
          exact
          path="/publications/our-open-letter"
          component={OpenLetter}
        />
        <Route exact path="/publications/briefs" component={Nothing} />
        <Route exact path="/publications/reports" component={Nothing} />
        <Route exact path="/publications/guides" component={Nothing} />
        <Route exact path="/publications/others" component={Nothing} />
        <Route exact path="/our-march" component={March} />
        <Route exact path="/our-research" component={Research} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/connect-with-us" component={Connect} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
