import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import Header from '../components/Header';
import CardPet from '../components/CardPet';

import axios from '../config/axios';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0px',
    fontWeight: 550
  },
  cards: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function Index(props) {
  const classes = useStyles();

  const [breeds, setBreeds] = useState([])

  useEffect(async () => {
    const resultApiBreeds = await axios.get('/api/breeds')

    setBreeds(resultApiBreeds.data)
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h4" component="h4" className={classes.title} >
          Para adoção
        </Typography>
        <Grid container spacing={3}>
          {
            breeds.map(breed => {
              return (
                <Grid item sm={4} xs={12} key={breed.id} className={classes.cards}>
                  <CardPet
                    id={breed.id}
                    image={`http://localhost:3000/images/${breed.id}.jpg`}
                    name={breed.name}
                    temperaments={breed.temperament}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  )
}
