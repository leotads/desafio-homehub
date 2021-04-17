import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import { AdoptionContext } from '../../context/AdoptionContext';

import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';

import Header from '../../components/Header';
import Temperament from '../../components/Temperament';

import axios from '../../config/axios';

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  media: {
    height: 270,
  },
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
})

export default function Details(props) {
  const classes = useStyles();
  const router = useRouter();
  const [breed, setBreed] = useState({});
  const adoptionContext = useContext(AdoptionContext);

  useEffect(async () => {
    try {
      const resultApiBreed = await axios.get(`/api/details?id=${router.query.id}`);

      setBreed(resultApiBreed.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function onClickAdoption() {
    try {
      adoptionContext.setAdoptions([
        ...adoptionContext.adoptions,
        breed
      ]);

      router.push('/pet/adoptions')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header return />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h4" className={classes.title} >
          Detalhes
        </Typography>
        <Card className={classes.root} >
          <CardMedia
            className={classes.media}
            image={`http://localhost:3000/images/${breed.id}.jpg`}
            title={breed.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {breed.name}
            </Typography>
            {
              breed.temperament ?
                <Temperament temperaments={breed.temperament} />
                :
                <></>
            }
            <>
              <ul>
                <li><strong>Expectativa de vida:</strong> {breed.life_span}</li>
                <li><strong>Criado para:</strong> {breed.bred_for}</li>
                <li><strong>Grupo de raças:</strong> {breed.breed_group}</li>
                <li><strong>Peso:</strong></li>
                <ul>
                  <li><strong>Imperial:</strong> {breed.weight ? breed.weight.imperial : ''}</li>
                  <li><strong>metric:</strong> {breed.weight ? breed.weight.metric : ''}</li>
                </ul>
                <li><strong>Altura:</strong></li>
                <ul>
                  <li><strong>Imperial:</strong> {breed.height ? breed.height.imperial : ''}</li>
                  <li><strong>metric:</strong> {breed.height ? breed.height.metric : ''}</li>
                </ul>
              </ul>
            </>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={onClickAdoption}
            >
              Adotar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}