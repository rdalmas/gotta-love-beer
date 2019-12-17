import React from "react";

const Beer = ({ beer }) => (
  <div key={beer.id}>beer id: {beer.id}</div>
)

export default Beer;