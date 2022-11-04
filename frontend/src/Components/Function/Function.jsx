import axios from "axios"

// feedback: fw18_0042, fw16_644, fw19_0658 - Don't use static URLs, 
// most of the time, we will be using different env to access APIs 
// make them dynamic with env config
export const getData = async (token) => {
    let res = await axios.get("https://whispering-beyond-98740.herokuapp.com/project", {
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
    let res = await axios.post("https://whispering-beyond-98740.herokuapp.com/project", data, options);
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
    let res = await axios.patch(`https://whispering-beyond-98740.herokuapp.com/project/${id}`, data, options);

    console.log(res.data);

    return res.data;
}


export const deleteData = async (token, id) => {
    let res = await axios.delete(`https://whispering-beyond-98740.herokuapp.com/project/${id}`, {
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

    let res = await axios.post(`https://whispering-beyond-98740.herokuapp.com/task`, data, options);
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

    let res = await axios.patch(`https://whispering-beyond-98740.herokuapp.com/task/${id}`, data, options);
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

    let res = await axios.delete(`https://whispering-beyond-98740.herokuapp.com/task/${taskId}`,options);
    console.log(res,'deleted task',taskId)
    return res.data;
}
