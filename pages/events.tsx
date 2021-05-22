import { Button } from '@material-ui/core';
import SimpleCard from 'components/events/EventCard';
const Events = () => {
  const data = [
    {
      name: 'Спектакль Ромео и Джульета',
      description: 'Крутой театр ооооо',
      timestamp: '25.05.21',
      cost: 0,
    },
    {
      name: 'Футбол. Зенит - ЦСКА',
      description: 'Встреча 2 футбольных команд',
      timestamp: '28.05.21',
      cost: 25,
    },
  ];
  return (
    <div className='w-full flex justify-center items-center px-16'>
      <div className='flex flex-col items-center w-full'>
        {data.map(({ name, description, timestamp, cost }) => (
          <SimpleCard
            name={name}
            description={description}
            timestamp={timestamp}
            cost={cost}
          />
        ))}
      </div>
    </div>
  );
};
export default Events;
