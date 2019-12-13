import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import BeerRoulete from "./BeerRoulete";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <Router>
        <Sidebar />
        <React.Fragment>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/beer-roulete">
              <BeerRoulete />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

export default App;
