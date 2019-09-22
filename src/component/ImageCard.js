import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Typography, CardMedia, CardContent, CardActionArea, Card} from '@material-ui/core';


const useStyles = makeStyles({
  // card: {
  //   maxWidth: 345,
  // },
  media: {
    height: '100%',
    paddingTop: '1', // 16:9
  },

});

export default function ImageCard(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          className={classes.media}
          image={prop.image}
          title={prop.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {prop.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
