import BuyCard from 'components/history/buyCard';
const History = () => {
  const data = [
    {
      name: 'Сувенирная лавка',
      timestamp: '10.05.2021 10:10',
      cost: -568,
    },
    {
      name: 'Пополнение',
      timestamp: '9.05.2021 17:22',
      cost: +2000,
    },
    {
      name: 'Бронь ресторана',
      timestamp: '7.05.2021 13:26',
      cost: -2000,
    },
    {
      name: 'Пополнение',
      timestamp: '3.05.2021 12:22',
      cost: +5000,
    },
  ];
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-col items-center w-full'>
        {data.map(({ name, timestamp, cost }) => (
          <BuyCard
            key={`${timestamp}`}
            name={name}
            timestamp={timestamp}
            cost={cost}
          />
        ))}
      </div>
    </div>
  );
};
export default History;
