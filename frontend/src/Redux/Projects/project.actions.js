import axios from "axios"
import { ADD_PROJECT, DEL_PROJECT, GET_ALL_PROJECTS } from "./project.types";

const api = 'https://tracting-time.vercel.app';

export const getAllProjectsAPI = (token) => async (dispatch) => {
    try {
        let res = await axios.get(`${api}/project`, {
            headers: { token: token }
        })
        dispatch({ type: GET_ALL_PROJECTS, payload: res.data || [] })
        return res.data
    }
    catch (err) {
        return err;
    }
}

export const createProject = (token, params) => async (dispatch) => {
    try {
        let [id] = token.split(':')
        const options = {
            headers: {
                'token': token
            }
        }
        const data = {
            userId: id,
            ...params
        }
        let res = await axios.post(`${api}/project`, data, options);
        dispatch({ type: ADD_PROJECT, payload: res.data || {} })
        return res.data
    }
    catch (err) {
        return err;
    }
}

export const deleteProjectAPI = (token, id) => async (dispatch) => {
    try {
        let res = await axios.delete(`${api}/project/${id}`, {
            headers: { token: token }
        });
        dispatch({ type: DEL_PROJECT, payload: id });
        return res.data;
    }
    catch (err) {
        return err;
    }
}