import {
    SIGN_IN,
    SIGN_OUT,
    REGISTER,
    FETCH_END,
    FETCH_START,
    UPDATE_BALANCE,
  } from './constants';
  
  const defaultState = {
    isFetching: false,
    signin: false,
    balance:0,
    role:"worker"
  };
  
  const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_START: {
        return { ...state, isFetching: true };
      }
      case FETCH_END: {
        if (action.status === 'failed') {
          return { ...state, isFetching: false, error: true };
        }
        return { ...state, isFetching: false, error: false };
      }
      case REGISTER: {
        return { ...state, user: action.payload, signin: true,role:"client" };
      }
      case SIGN_IN: {
        return { ...state, user: action.payload, signin: true,role:"client" };
      }
      case SIGN_OUT:{
        localStorage.removeItem("jwt")
        return {...state,signin:false}
      }
      case UPDATE_BALANCE: {
        return { ...state, balance: action.payload };
      }
      case "DEMO":{
        return{...state,signin:true,role:action.payload}
      }
      default: {
        return { ...state };
      }
    }
  };
  
  export default userReducer;
  