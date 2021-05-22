import { useState } from 'react';
import { TextField } from '@material-ui/core';
import ServiceCard from 'components/services/serviceCard';

import { useStyles } from 'shared/styles';
const Services = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState('');
  const data = [
    {
      name: 'Забронировать столик в ресторане',
    },
    {
      name: 'Кино',
    },
    {
      name: 'Запись ко врачу',
    },
    {
      name: 'Оплата коммунальных услуг',
    },
  ];
  const classes = useStyles();
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-col items-center w-full'>
        <div className='mb-16 w-full px-15 text-white'>
          <TextField
            fullWidth
            label={
              <span className='text-white'>
                Введите название услуги или сервиса
              </span>
            }
            onChange={({ target }) => setText(target.value)}
          />
        </div>
        {data
          .filter(({ name }) => name.toLowerCase().includes(text.toLowerCase()))
          .map(({ name }) => (
            <ServiceCard key={name} name={name} />
          ))}
      </div>
    </div>
  );
};
export default Services;
