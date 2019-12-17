import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const Beer = ({ beer }) => (
  <GridListTile key={beer.id}>
    <img src={beer.image_url} alt={beer.name} style={{ height: 250 }} />
    <GridListTileBar
      title={beer.name}
      subtitle={<span>More info: {beer.tagline}</span>}
      actionIcon={
        <IconButton aria-label={`info about ${beer.name}`}>
          <InfoIcon />
        </IconButton>
      }
    />
  </GridListTile>
)

export default Beer;