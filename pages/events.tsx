import { Button } from '@material-ui/core';
const Events = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div>
        <img
          className='block'
          src='/assets/images/card.jpg'
          alt='Picture of the author'
          width={330}
        />
        <div className='flex justify-between items-center mt-16'>
          <Button variant='outlined'>
            <span>Оплатить</span>
          </Button>
          <Button variant='contained' color='secondary'>
            <span>Пополнить</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Events;
