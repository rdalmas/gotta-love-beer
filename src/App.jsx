import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { Home, About, BeerRoulete, BeerList } from "./pages";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

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
  const classes = useStyles();
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
            <Paper className={classes.root}>
              <Tabs 
                value={location.pathname}
                indicatorColor="primary"
                textColor="primary"
                centered
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
            </Paper>
          )}
        />
      </Router>
    </Container>
  );
}

export default App;
