import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBalance } from 'redux/user/actions';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const SendMoneyWindow = ({ open, handleClose }) => {
  const [money, setMoney] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <DialogTitle id='form-dialog-title'>Пополнение карты</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Введите необходимую сумму'
          onChange={(e) => setMoney(Number(e.target.value))}
          value={money}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Отмена
        </Button>
        <Button
          onClick={() => {
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
          }}
          color='primary'
          disabled={isFetching}
        >
          Пополнить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SendMoneyWindow;
