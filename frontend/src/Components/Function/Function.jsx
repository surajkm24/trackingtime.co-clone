import axios from "axios"

const api = 'https://tracting-time.vercel.app';

export const getData = async (token) => {
    let res = await axios.get(`${api}/project`, {
        headers: { token: token }
    })
    return res.data
}

export const postData = async (token, params) => {
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
    // console.log(res);
    return res.data
}

export const editData = async (token, id, params) => {
    const options = {
        headers: {
            'token': token
        }
    }
    const data = {
        ...params
    }
    let res = await axios.patch(`${api}/project/${id}`, data, options);

    console.log(res.data);

    return res.data;
}


export const deleteData = async (token, id) => {
    let res = await axios.delete(`${api}/project/${id}`, {
        headers: { token: token }
    });
    return res.data;
}

export const addTask = async (token, id, params) => {
    const options = {
        headers: {
            'token': token
        }
    }
    const data = {
        projectId: id,
        ...params
    }

    let res = await axios.post(`${api}/task`, data, options);
    return res.data;
}

export const updateTask = async (token, id, params) => {
    const options = {
        headers: {
            'token': token
        }
    }
    const data = {
        ...params
    }

    let res = await axios.patch(`${api}/task/${id}`, data, options);
    return res.data;
}

export const deleteTask = async (token, taskId, projectId) => {
    const options = {
        headers: {
            'token': token
        }
    }
    const data = {
        projectId: projectId
    }

    console.log(token,'token');

    let res = await axios.delete(`${api}/task/${taskId}`,options);
    console.log(res,'deleted task',taskId)
    return res.data;
}