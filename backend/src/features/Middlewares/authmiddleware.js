const User = require('../users/user.schema.js');

const authmiddleware = async(req,res,next) => {
    try{
        let {token} = req.headers;
    if(!token){
        return res.status(401).send('operation not allowed, please authorize')
    }else{
        token = token.split(":");
        const [id,email,password] = token
        const user =await User.findOne({email,password})
        if(!user){
            return res.status(401).send('operation not allowed,alr  eady deleted')
        }else if(user.email!==email  || user.password!==password){
            return res.status(401).send('operation not allowed')
        }else next()
    }
    }catch{
        res.status(401).send('operation not allowed')
    }
}
module.exports = authmiddleware