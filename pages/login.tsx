import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
import { signIn, demo } from 'redux/user/actions';
import { useStyles } from 'shared/styles';
import { AppStateType } from 'redux/store';
import Registration from './registration';
const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFetching = useSelector(
    ({ userReducer }: AppStateType) => userReducer.isFetching
  );
  const handleAuth = () => {
    dispatch(signIn({ email, password }));
  };
  const classes = useStyles();
  const router = useRouter();
  console.log(router.route);
  return (
    <div
      style={{ backgroundColor: 'rgb(39,170,225)' }}
      className=' h-screen w-screen flex justify-center align-middle items-center'
    >
      {router.route === '/registration' ? (
        <Registration />
      ) : (
        <div className='flex flex-col w-3/4'>
          <div className='w-full'>
            <TextField
              label='Email'
              className={classes.authText}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label='Пароль'
              className={classes.authText}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
          </div>
          <div className='flex flex-col  mt-16 justify-center gap-8  align-middle'>
            <Button
              onClick={handleAuth}
              disabled={isFetching}
              className={classes.button}
            >
              <span className=''>Авторизоваться</span>
            </Button>

            <Button
              variant='outlined'
              onClick={() => router.push('/registration')}
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={() => {
                dispatch(demo('worker'));
              }}
              className={classes.button}
            >
              <span className=''>Демо доступ работник</span>
            </Button>
            <Button
              onClick={() => {
                dispatch(demo('client'));
              }}
              className={classes.button}
            >
              <span className=''>Демо доступ клиент</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
