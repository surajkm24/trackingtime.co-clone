import axios from "axios"
export const getData = async (token) => {
    let res = await axios.get("http://localhost:8080/project", {
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
    let res = await axios.post("http://localhost:8080/project", data, options);
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
    let res = await axios.patch(`http://localhost:8080/project/${id}`, data, options);

    console.log(res.data);

    return res.data;
}


export const deleteData = async (token, id) => {
    let res = await axios.delete(`http://localhost:8080/project/${id}`, {
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

    let res = await axios.post(`http://localhost:8080/task`, data, options);
    return res.data;
}