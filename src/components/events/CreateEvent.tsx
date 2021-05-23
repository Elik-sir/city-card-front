import { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import {
  Button,
  TextField,
  Select,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: '240px',
      marginBottom: '16px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const CreateEvent = ({ open, handleClose }) => {
  const [money, setMoney] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [age, setAge] = useState('');
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      fullWidth
      onClick={(e) => e.stopPropagation()}
    >
      <DialogTitle id='form-dialog-title'>Создание события</DialogTitle>
      <DialogContent className='w-full'>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Введите название'
          onChange={(e) => setMoney(Number(e.target.value))}
          className={classes.formControl}
        />
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Введите описание'
          onChange={(e) => setMoney(Number(e.target.value))}
          className={classes.formControl}
        />
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Введите стоимость'
          onChange={(e) => setMoney(Number(e.target.value))}
          className={classes.formControl}
        />
        <input type='date' />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Отмена
        </Button>
        <Button onClick={handleClose} color='primary'>
          Забронировать
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateEvent;
