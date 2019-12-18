import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  card: {
    width: 200,
    height: "auto"
  },
  media: {
    height: 200
  },
});

const Beer = ({ beer }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={beer.image_url}
          title={beer.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" aria-label="beer name">
            {beer.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" aria-label="beer tagline">
            {beer.tagline}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary" arial-label="more info">
          More info
        </Button>
      </CardActions>
    </Card>
  )
};

export default Beer;