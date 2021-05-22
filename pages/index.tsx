import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import SendMoneyWindow from 'components/home/SendMoneyWindow';
const Home = () => {
  const [open, setOpen] = useState(false);
  const balance = useSelector<any>((store) => store.userReducer.balance);
  return (
    <div className='w-full flex justify-center items-center'>
      <div>
        <div className='relative'>
          <img
            className='block'
            src='/assets/images/card.jpg'
            alt='Picture of the author'
            width={330}
          />
          <p className='z-10 absolute text-p2' style={{ bottom: 10, left: 10 }}>
            Баланс: {balance} <span className='text-p4'>руб.</span>
          </p>
        </div>
        <div className='flex justify-between items-center mt-16'>
          <Button variant='outlined'>
            <span>Оплатить</span>
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setOpen(true)}
          >
            <span>Пополнить</span>
          </Button>
        </div>
      </div>
      <SendMoneyWindow open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};
export default Home;
