import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import {
  TextField,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { register } from 'redux/user/actions';
import { AppStateType } from 'redux/store';
const RegistrationPage = () => {
  const [fields, setFields] = useState({
    role: 'user',
    email: '',
    password: '',
    name: '',
    surname: '',
    mname: '',
    telephone: '',
    isAnonim: false,
    type: 'liver',
  });
  const dispatch = useDispatch();
  const isFetching = useSelector(
    ({ userReducer }: AppStateType) => userReducer.isFetching
  );
  const fieldsName = [
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Пароль' },
    { name: 'type', label: 'Гость' },
    { name: 'isAnonim', label: 'Анонимно' },
    { name: 'surname', label: 'Фамилия' },
    { name: 'name', label: 'Имя' },
    { name: 'mname', label: 'Отчество' },
    { name: 'telephone', label: 'Телефон' },
  ];
  const handleChange = ({ target: { name, value } }) =>
    setFields((prevState) => ({ ...prevState, [name]: value }));

  const handleSubmit = () => {
    const { email, password, isAnonim, name, surname, mname, telephone } =
      fields;

    if (email.length > 5 && password.length > 5) {
      if (isAnonim) {
        dispatch(register(fields));
        return;
      }
      if (
        name.length > 2 &&
        surname.length > 3 &&
        mname.length > 3 &&
        telephone.length > 5
      ) {
        dispatch(register(fields));
      }
    }
  };
  return (
    <div
      style={{ backgroundColor: 'rgb(39,170,225)' }}
      className=' h-screen w-screen flex justify-center align-middle items-center'
    >
      <div className='flex flex-col w-3/4'>
        <div className='w-full'>
          {fieldsName.map(({ name, label }) =>
            name === 'isAnonim' ? (
              <FormControlLabel
                key={name}
                control={
                  <Checkbox
                    checked={fields.isAnonim}
                    onChange={() =>
                      setFields((prevState) => ({
                        ...prevState,
                        isAnonim: !prevState.isAnonim,
                      }))
                    }
                    name={name}
                    color='primary'
                  />
                }
                label={label}
              />
            ) : name === 'type' ? (
              <RadioGroup
                key={name}
                aria-label='type'
                name='type'
                value={fields.type}
                onChange={handleChange}
              >
                <div className='flex mt-10'>
                  <div className='mr-20'>
                    <FormControlLabel
                      value='liver'
                      control={<Radio />}
                      label='Житель'
                    />
                  </div>
                  <FormControlLabel
                    value='guest'
                    control={<Radio />}
                    label='Гость'
                  />
                </div>
              </RadioGroup>
            ) : (
              (!fields.isAnonim || name === 'email' || name === 'password') && (
                <TextField
                  label={label}
                  className='w-full mb-8'
                  name={name}
                  onChange={handleChange}
                  type={name === 'password' ? 'password' : 'text'}
                  key={name}
                />
              )
            )
          )}
        </div>
        <div className='flex flex-col  mt-16 justify-center  align-middle'>
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='primary'
            disabled={isFetching}
          >
            <span className='text-p4'>Зарегистрироваться</span>
          </Button>

          <Link href='/'>
            <a className='text-p4 mt-10'>Назад</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
