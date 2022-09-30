import axios from "axios"
export const getData = async (token,id)=>{
    let res = await  axios.get("http://localhost:8080/project")
    return res.data
}

export const postData = async (params)=>{
    let res = await  axios.post("",params)
    return res.data
}

export const editData = async (id)=>{
    let res = await  axios.PATCH("")
    return res.data
}


export const deleteData = async (id)=>{
    let res = await  axios.PATCH("")
    return res.data
}