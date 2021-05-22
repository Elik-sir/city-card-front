import api from 'redux/api';
import {SIGN_IN,SIGN_OUT, REGISTER,FETCH_END,FETCH_START} from './constants'

export const fetchStart=()=>({
    type:FETCH_START,
})
export const fetchEnd=()=>({
    type:FETCH_END,
})

export const register = (data) => {
 
    return async (dispatch:any)=>{
        try{
        dispatch(fetchStart());
        const resp= await api.post('auth/register', data);
        
        if(!resp.data.error){
        dispatch({type:REGISTER, payload:resp.data});
        localStorage.setItem('jwt', resp.data.tokens.accessToken);
        }       
        }
        catch{
            dispatch(fetchEnd());
        }
    }}