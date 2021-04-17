import {
  Chip,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Temperament(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        props.temperaments.split(",").map(temperament => {
          return <Chip key={temperament} label={temperament} variant="outlined" />
        })
      }
    </div>
  )
}