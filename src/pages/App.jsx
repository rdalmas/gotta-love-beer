import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { Home, About, BeerRoulete, BeerList } from "../pages";
import { Sidebar } from "../components";

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
            <Route exact path="/beer-list">
              <BeerList />
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
