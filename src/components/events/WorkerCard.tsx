import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%%',
    marginBottom: '15px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ name, description, timestamp, cost }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' component='h5'>
          {name}
        </Typography>
        <p className='text-p3'>Описание:</p>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
        <p className='text-p3 mt-6'>{`Дата: ${timestamp}  `}</p>
        <p className='text-p3'>{!Number(cost) ? 'бесплатно' : `${cost} ₽`}</p>
      </CardContent>
      <CardActions className='flex justify-between'>
        <Button size='small' variant='outlined' color='primary'>
          Редактировать
        </Button>
      </CardActions>
    </Card>
  );
}
