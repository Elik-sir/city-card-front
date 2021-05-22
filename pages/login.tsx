import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
import { signIn } from 'redux/user/actions';
const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFetching = useSelector<any>((store) => store.userReducer.isFetching);
  const handleAuth = () => {
    dispatch(signIn({ email, password }));
  };
  return (
    <div className='bg-orange_3 h-screen w-screen flex justify-center align-middle items-center'>
      <div className='flex flex-col w-3/4'>
        <div className='w-full'>
          <TextField
            label='Email'
            className='w-full mb-8'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label='Пароль'
            className='w-full'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <div className='flex flex-col  mt-16 justify-center  align-middle'>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleAuth}
            disabled={isFetching}
          >
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
