import { useState } from 'react';
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='bg-orange_3 h-screen w-screen flex justify-center align-middle items-center'>
      <div className='flex flex-col w-3/4'>
        <div className='w-full'>
          <TextField
            label='Логин'
            className='w-full mb-8'
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            label='Пароль'
            className='w-full'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <div className='flex flex-col  mt-16 justify-center  align-middle'>
          <Button variant='outlined' color='primary'>
            <span className=''>Авторизоваться</span>
          </Button>
          <div className='w-auto'>
            <Link href='registration'>
              <a className='text-p4'>Зарегистрироваться</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
