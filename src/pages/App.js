import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <Router>
        <React.Fragment>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              About component here...
            </Route>
            <Route path="/users">
              Users component here...
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

export default App;
