import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./auth.types"

let token = localStorage.getItem('trackTimeToken') || ""
const initState = {
    token: token,
    loading: false,
    error: false
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case AUTH_LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
        case AUTH_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case AUTH_LOGIN_SUCCESS:
            if (action.payload.token) {
                localStorage.setItem('trackTimeToken', action.payload.token)
            }
            return {
                ...state,
                loading: false,
                error: false,
                token: action.payload.token
            }
        case AUTH_SIGNUP_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_SIGNUP_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SIGNUP_SUCCESS:
            if (action.payload.token) {
                localStorage.setItem('trackTimeToken', action.payload.token)
            }
            return {
                ...state,
                loading: false,
                error: false,
                token: action.payload.token
            }
        case AUTH_LOGOUT:
            localStorage.removeItem('trackTimeToken');
            return {
                ...state,
                loading: false,
                error: false,
                token: ""
            }
        default:
            return state
    }
}