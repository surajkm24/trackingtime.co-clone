import axios from 'axios';

const api = 'https://tracting-time.vercel.app';

export const getProject = async (token, id) => {
    try {
        if(id){
            let res = await axios.get(`${api}/project/${id}`, {
                headers: {
                    token: token
                }
            });
            console.log(res,'getProject')
            return res.data
        }
      else {
        return 'error'
      }
    }
    catch (e) {
        console.log(e);
    }
}
