import React from "react";

import Beer from "../Beer/Beer";

const Beers = ({ beers }) => {
  if (beers.length > 0) {
    return (
      <React.Fragment>
      { beers.map(b => (
        <Beer key={b.id} beer={b} />
      ))}
      </React.Fragment>
    )
  }  
  return (<div>No beers...</div>)
}

export default Beers;