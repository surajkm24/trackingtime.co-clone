import axios from "axios"
import { ADD_PROJECT, ADD_TASK, DEL_PROJECT, DEL_TASK, GET_ALL_PROJECTS, GET_TASKS, SET_PROJECT, UPD_PROJECT, UPD_TASK } from "./project.types";

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

export const setProject = (payload) => { return { type: SET_PROJECT, payload } }

export const getAllTasksAPI = (token, id) => async (dispatch) => {
    try {
        let res = await axios.get(`${api}/task/project/${id}`, {
            headers: { token: token }
        });
        dispatch({ type: GET_TASKS, payload: res.data });
        return res.data;
    }
    catch (err) {
        return err;
    }
}

export const patchProjectAPI = (token, id, params) => async (dispatch) => {
    try {
        const options = { headers: { token } }
        const data = { ...params }
        let res = await axios.patch(`${api}/project/${id}`, data, options);
        dispatch({ type: UPD_PROJECT, payload: res.data || {} })
        return res.data;
    }
    catch (err) {
        return err;
    }
}

export const addTaskAPI = (token, id, params) => async (dispatch) => {
    try {
        const options = { headers: { token } }
        const data = { projectId: id, ...params }
        let res = await axios.post(`${api}/task`, data, options);
        dispatch({ type: ADD_TASK, payload: res.data })
        return res.data;
    }
    catch (err) {
        return err;
    }
}

export const patchTaskAPI = (token, id, params) => async (dispatch) => {
    try {
        const options = { headers: { token } }
        const data = { ...params }
        let res = await axios.patch(`${api}/task/${id}`, data, options);
        dispatch({ type: UPD_TASK, payload: res.data })
        return res.data;
    }
    catch (err) {
        return err;
    }
}

export const deleteTaskAPI = (token, taskId) => async (dispatch) => {
    try {
        const options = { headers: { token } }
        let res = await axios.delete(`${api}/task/${taskId}`, options);
        dispatch({ type: DEL_TASK, payload: taskId })
        return res.data;
    }
    catch (err) {
        return err;
    }
}