import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '93%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '0 12px',
    justifyContent: 'space-between',
  },
});

export default function BuyCard({ name, timestamp, cost }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <div>
        <p> {name}</p>
        <span className='text-cool_grey_blue'>{timestamp}</span>
      </div>
      <p className={cost > 0 ? 'text-topaz' : 'text-orange'}>
        {cost > 0 ? `+ ${cost}` : `${cost}`} ₽
      </p>
    </Paper>
  );
}
