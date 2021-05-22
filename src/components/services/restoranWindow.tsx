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

const RestoranWindow = ({ open, handleClose }) => {
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
      <DialogTitle id='form-dialog-title'>Бронирование столика</DialogTitle>
      <DialogContent className='w-full'>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>
            Выберете ресторан
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Грузинский ресторан</MenuItem>
            <MenuItem value={20}>Итальянский ресторан</MenuItem>
            <MenuItem value={30}>Японский ресторан</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Введите количество персон'
          onChange={(e) => setMoney(Number(e.target.value))}
          value={money}
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
export default RestoranWindow;
