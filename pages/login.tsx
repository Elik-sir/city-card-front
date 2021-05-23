import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
import { signIn } from 'redux/user/actions';
import { useStyles } from 'shared/styles';
import { AppStateType } from 'redux/store';
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
  return (
    <div
      style={{ backgroundColor: 'rgb(39,170,225)' }}
      className=' h-screen w-screen flex justify-center align-middle items-center'
    >
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
          <Button variant='outlined'>
            <Link href='registration'>
              <a>Зарегистрироваться</a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
