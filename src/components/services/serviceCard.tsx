import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '93%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '0 12px',
    justifyContent: 'space-between',
  },
});
import RestoranWindow from 'components/services/restoranWindow';

export default function ServiceCard({ name }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Paper
      elevation={3}
      className={classes.root}
      onClick={() =>
        name === 'Забронировать столик в ресторане' && setOpen(true)
      }
    >
      {name}
      <RestoranWindow open={open} handleClose={() => setOpen(false)} />
    </Paper>
  );
}
