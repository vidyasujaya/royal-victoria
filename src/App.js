import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Resources } from "./Resources";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resources" component={Resources} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
