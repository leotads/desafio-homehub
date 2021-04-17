import Link from 'next/link';
import { useContext } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { AdoptionContext } from '../../context/AdoptionContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const adoptionContext = useContext(AdoptionContext);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {
            props.return
              ?
              <>
                <Link href={'/'}>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <ArrowBackIcon />
                  </IconButton>
                </Link>

              </>
              :
              <></>
          }
          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" noWrap>
            DOGHUB
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={adoptionContext.adoptions.length} color="secondary">
                <StorefrontIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}