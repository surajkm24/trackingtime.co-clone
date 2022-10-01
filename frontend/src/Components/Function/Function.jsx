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

export const editData = async (id) => {
    let res = await axios.PATCH("")
    return res.data
}


export const deleteData = async (id) => {
    let res = await axios.PATCH("")
    return res.data
}