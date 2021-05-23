import api from 'redux/api';
import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER,
  FETCH_END,
  FETCH_START,
  UPDATE_BALANCE,
  GET_QR_TOKEN,
} from './constants';

export const fetchStart = () => ({
  type: FETCH_START,
});
export const fetchEnd = (status) => ({
  type: FETCH_END,
  status,
});



export const register = (data) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchStart());
      const resp = await api.post('auth/register', data);

      if (!resp.data.error) {
        dispatch({ type: REGISTER, payload: resp.data });
        localStorage.setItem('jwt', resp.data.tokens.accessToken);
      }
      dispatch(fetchEnd('success'));
    } catch {
      dispatch(fetchEnd('failed'));
    }
  };
};

export const signIn = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const { data: resp } = await api.post('auth/login', data);
      if (!resp.error) {
        dispatch({ type: SIGN_IN, payload: resp.user });
        localStorage.setItem('jwt', resp.tokens.accessToken);
        dispatch(fetchEnd('success'));
      }
    } catch {
      dispatch(fetchEnd('failed'));
    }
  };
};

export const updateBalance = () => {
    return async (dispatch) => {
      try {
        dispatch(fetchStart());
        const { data: resp } = await api.get('pay/balance', {
          headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        });
        dispatch({ type: UPDATE_BALANCE, payload: resp.balance });
        dispatch(fetchEnd('success'));
      } catch {
        dispatch(fetchEnd('failed'));
      }
    };
  };

  export const getQrToken=()=>{
    return async (dispatch) => {
        try {
          dispatch(fetchStart());
          const { data: resp } = await api.get('pay/balance', {
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
          });
          dispatch({ type: GET_QR_TOKEN, payload: resp.balance });
          dispatch(fetchEnd('success'));
        } catch {
          dispatch(fetchEnd('failed'));
        }
      };
  }

  export const demo=(payload)=>({
    type:"DEMO",payload
  })
