import axios from 'axios';

export const getProject = async (token, id) => {
    try {
        let res = await axios.get(`http://localhost:8080/project/${id}`, {
            headers: {
                token: token
            }
        });
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}
