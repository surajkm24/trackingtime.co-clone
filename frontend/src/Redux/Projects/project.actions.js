import axios from "axios"
import { GET_ALL_PROJECTS } from "./project.types";

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