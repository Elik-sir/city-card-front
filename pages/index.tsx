import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Paper } from '@material-ui/core';
import SendMoneyWindow from 'components/home/SendMoneyWindow';
import PayWindow from 'components/home/PayWindow';
import { AppStateType } from 'redux/store';
import { signOut } from 'redux/user/actions';
import { useStyles } from 'shared/styles';
import EventCard from 'components/events/EventCard';
const Home = () => {
  const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  const balance = useSelector(
    (store: AppStateType) => store.userReducer.balance
  );
  const role = useSelector((store: AppStateType) => store.userReducer.role);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div style={{ width: '91%', height: '100%' }}>
        <div className='flex text-p4 items-center justify-between '>
          <p
            style={{ borderBottom: '2px solid orange' }}
            className='text-white mb-4'
          >
            Ваш аккаунт ЕСИА не подтверждён
          </p>
          <Button>
            <span className='text-p4 text-white'>Подтвердить</span>
          </Button>
        </div>
        <img
          className='block'
          src='/assets/images/card.jpg'
          alt='Picture of the author'
          width={330}
        />
        <p className='  text-white mt-12'>
          Баланс: {balance || 1000} <span className='text-p4'>₽</span>
        </p>
        {role === 'client' && (
          <p className='  text-white mt-12'>
            Баллы: {58} <span className='text-p4'></span>
          </p>
        )}
        <p className='  text-white mt-12'>
          {role === 'client' ? 'Житель города ' : 'Сотрудник'}
        </p>

        {role === 'client' && (
          <div className='mt-20 '>
            <p>Специальное предложение:</p>
            <EventCard
              role='client'
              name='Выставка картин'
              description='Знаменитые картины художников в одном месте...'
              timestamp='1.06.21'
              cost='бесплатно'
            />
          </div>
        )}
        <div className='flex justify-between items-center mt-16'>
          <Button className={classes.button} onClick={() => setOpenQr(true)}>
            <span>{role === 'worker' ? 'Проверить билет' : 'Показать'}</span>
          </Button>
          <Button className={classes.button} onClick={() => setOpen(true)}>
            <span>{role === 'worker' ? 'Принять платёж' : 'Пополнить'}</span>
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 'auto', marginBottom: '80px' }}>
        <Button onClick={() => dispatch(signOut())}>
          <span className='text-white'>Выйти из аккаунта</span>
        </Button>
      </div>
      <SendMoneyWindow
        open={open}
        handleClose={() => setOpen(false)}
        role={role}
      />
      <PayWindow open={openQr} handleClose={() => setOpenQr(false)} />
    </div>
  );
};
export default Home;
