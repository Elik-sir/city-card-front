import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBalance } from 'redux/user/actions';
import { useRouter } from 'next/router';
import { useStyles } from 'shared/styles';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const SendMoneyWindow = ({ open, handleClose, role }) => {
  const [money, setMoney] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const clientSubmit = () => {
    setIsFetching(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pay/money`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ money }),
    })
      .then((data) => {
        setIsFetching(false);
        dispatch(updateBalance());
        handleClose();
      })
      .catch(() => {
        setIsFetching(false);
        console.log('error');
      });
  };
  const router = useRouter();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <DialogTitle id='form-dialog-title'>
        {role === 'client' ? 'Пополнение карты' : 'Введите сумму платежа'}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Введите необходимую сумму'
          onChange={(e) => setMoney(Number(e.target.value))}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={classes.button}>
          Отмена
        </Button>
        <Button
          onClick={() => {
            role === 'client' ? clientSubmit() : router.push('/scancode');
          }}
          className={classes.button}
          disabled={isFetching}
        >
          {role === 'client' ? 'Пополнить' : 'Далее'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SendMoneyWindow;
