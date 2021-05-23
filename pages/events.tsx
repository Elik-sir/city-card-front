import { Button } from '@material-ui/core';
import SimpleCard from 'components/events/EventCard';
import { useSelector } from 'react-redux';
import { AppStateType } from 'redux/store';
const Events = () => {
  const role = useSelector(({ userReducer }: AppStateType) => userReducer.role);
  const data = [
    {
      name: 'Спектакль Ромео и Джульета',
      description: 'Знаменитый спектакль...',
      timestamp: '25.05.21',
      cost: 1000,
    },
    {
      name: 'Футбол. Зенит - ЦСКА',
      description: 'Встреча 2 крутых футбольных команд',
      timestamp: '28.05.21',
      cost: 25000,
    },
    {
      name: 'Выставка картин',
      description: 'Знаменитые картины художников в одном месте...',
      timestamp: '1.06.21',
      cost: 'бесплатно',
    },
  ];
  return (
    <div className='w-full flex justify-center items-center px-16 pb-55'>
      <div className='grid grid-cols-1 items-center w-full'>
        {data.map(({ name, description, timestamp, cost }) => (
          <SimpleCard
            name={name}
            description={description}
            timestamp={timestamp}
            cost={cost}
            role={role}
          />
        ))}
      </div>
    </div>
  );
};
export default Events;
