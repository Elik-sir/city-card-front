import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Paper } from '@material-ui/core';
import SendMoneyWindow from 'components/home/SendMoneyWindow';
import PayWindow from 'components/home/PayWindow';
import { AppStateType } from 'redux/store';
import { useStyles } from 'shared/styles';
const Home = () => {
  const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  const balance = useSelector(
    (store: AppStateType) => store.userReducer.balance
  );
  const classes = useStyles();
  return (
    <div className='w-full flex justify-center items-center'>
      <div>
        <img
          className='block'
          src='/assets/images/card.jpg'
          alt='Picture of the author'
          width={330}
        />
        <p className='  text-white mt-12'>
          Баланс: {balance || 1000} <span className='text-p4'>₽</span>
        </p>
        <p className='  text-white mt-12'>
          Баллы: {58} <span className='text-p4'></span>
        </p>
        <p className='  text-white mt-12'>
          Житель города <span className='text-p4'></span>
        </p>
        <div className='flex justify-between items-center mt-16'>
          <Button className={classes.button} onClick={() => setOpenQr(true)}>
            <span>Показать</span>
          </Button>
          <Button className={classes.button} onClick={() => setOpen(true)}>
            <span>Пополнить</span>
          </Button>
        </div>
      </div>
      <SendMoneyWindow open={open} handleClose={() => setOpen(false)} />
      <PayWindow open={openQr} handleClose={() => setOpenQr(false)} />
    </div>
  );
};
export default Home;
