import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Home, About, BeerRoulete, BeerList } from "../pages";

function App() {
  // for new tabs, just add it here. :)
  const allTabs = [
    {
      label: "Home",
      url: "/",
      Component: Home
    },
    {
      label: "Beer List",
      url: "/beer-list",
      Component: BeerList
    },
    {
      label: "Beer Roulete",
      url: "/beer-roulete",
      Component: BeerRoulete
    },
    {
      label: "About",
      url: "/about",
      Component: About
    }
  ];
  return (
    <Container fixed>
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <Router>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs 
                value={location.pathname}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                { allTabs.map(tab => (
                  <Tab key={tab.label} label={tab.label} value={tab.url} component={Link} to={tab.url} />
                ))}
              </Tabs>
              <Switch>
                { allTabs.map(tab => (
                  <Route exact key={tab.label} path={tab.url} render={() => <tab.Component />} />
                ))}
              </Switch>
            </Fragment>
          )}
        />
      </Router>
    </Container>
  );
}

export default App;
