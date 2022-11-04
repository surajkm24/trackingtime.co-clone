import axios from 'axios';
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_SUCCESS } from './auth.types';

export const singupAPI = (creds) => async (dispatch) => {
    dispatch({ type: AUTH_LOGIN_LOADING });
    try {
        // feedback: fw18_0042 - Always use constant file for URLs, don't include them directly
        let res = await axios.post('https://whispering-beyond-98740.herokuapp.com/user/signup', creds);
        // console.log(res.data);
        dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: res.data });
        return res.data;
    } 
    catch (e) {
        // console.log(e);
        dispatch({ type: AUTH_LOGIN_ERROR })
        return e;
    }
}
export const loginAPI = (creds) => async (dispatch) => {
    dispatch({ type: AUTH_LOGIN_LOADING });
    try {
        let res = await axios.post('https://whispering-beyond-98740.herokuapp.com/user/login', creds);
        // console.log(res.data);
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
        return res.data;
    } 
    catch (e) {
        // console.log(e);
        dispatch({ type: AUTH_LOGIN_ERROR })
        return e;
    }
}

export const logoutAPI = () => ({ type: AUTH_LOGOUT })
