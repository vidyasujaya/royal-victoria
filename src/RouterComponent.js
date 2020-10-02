import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Coalition } from "./pages/Coalition";
import { Background } from "./pages/Background";
import { OpenLetter } from "./pages/OpenLetter";
import { Connect } from "./pages/Connect";
import { Resources } from "./pages/Resources";
import { NoMatch } from "./pages/NoMatch";
import { Nothing } from "./pages/Nothing";
import { Media } from "./pages/Media";
import { Initiatives } from "./pages/Initiatives";

export const RouterComponent = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coalition" component={Coalition} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/initiatives" component={Initiatives} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/connect-with-us" component={Connect} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
