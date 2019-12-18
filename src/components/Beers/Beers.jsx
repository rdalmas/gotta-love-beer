import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from '@material-ui/core/ListSubheader';

import Beer from "../Beer/Beer";

import { GridRoot } from "./Beers.styled";

const Beers = ({ beers }) => {
  if (beers.length > 0) {
    return (
      <GridRoot>
        <GridList cellHeight={180} style={{ width: "auto", height: "auto" }}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Beers</ListSubheader>
          </GridListTile>
          { beers.map(b => (
            <Beer key={b.id} beer={b} />
          ))}
        </GridList>
      </GridRoot>
    )
  }
  return (<div>No beers...</div>)
}

export default Beers;