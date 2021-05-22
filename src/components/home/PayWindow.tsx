import { useState } from 'react';
import QrCode from 'shared/QrCodeWrapper';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const PayWindow = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <DialogTitle id='qr-code'>Оплата</DialogTitle>
      <DialogContent>
        <QrCode value='Привет' className='' />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PayWindow;
