import Link from 'next/link';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from '@material-ui/core';

import Temperament from '../Temperament/index';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 240,
  },
});

export default function CardPet(props) {
  const classes = useStyles();

  return (
    <Link href={`/pet/details?id=${props.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {props.name}
            </Typography>
            <Temperament temperaments={props.temperaments} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link >
  );
}