import { useState } from 'react';
import { useRouter } from 'next/router';
import { useStyles } from './styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Event, History } from '@material-ui/icons';

const NavBar = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <BottomNavigation
      value={router.route}
      onChange={(event, newValue) => {
        router.push(newValue, newValue, { shallow: true });
      }}
      showLabels
      className={classes.navbar}
    >
      <BottomNavigationAction label='Главная' icon={<Home />} value='/' />
      <BottomNavigationAction
        label='События'
        icon={<Event />}
        value='/events'
      />
      <BottomNavigationAction
        label='История'
        icon={<History />}
        value='/history'
      />
    </BottomNavigation>
  );
};

export default NavBar;
