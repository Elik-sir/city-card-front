import BuyCard from 'components/history/buyCard';
const History = () => {
  const data = [
    {
      name: 'Лента',
      timestamp: '10.05.2021 10:22',
      cost: 1000,
    },
    {
      name: 'Магнит',
      timestamp: '10.05.2021 12:22',
      cost: 1000,
    },
    {
      name: 'Дикси',
      timestamp: '10.05.2021 13:22',
      cost: -1000,
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
