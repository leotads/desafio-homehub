import { useContext } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { AdoptionContext } from '../../context/AdoptionContext';

import Header from '../../components/Header';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0px',
    fontWeight: 550
  },
  cards: {
    display: 'flex',
    margin: '10px 0px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151
  },
}));

export default function Adoptions(props) {

  const classes = useStyles();
  const theme = useTheme();

  const adoptionContext = useContext(AdoptionContext);

  return (
    <>
      <Header return />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h4" className={classes.title} >
          Sua lista de adoção
        </Typography>
        {
          adoptionContext.adoptions.map(adoption => {
            return (
              <Card className={classes.cards}>
                <CardMedia
                  className={classes.cover}
                  image={`http://localhost:3000/images/${adoption.id}.jpg`}
                  title={adoption.name}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {adoption.name}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            )
          })
        }
      </Container>
    </>
  )
}