const User = require('../users/user.schema.js');
 
const authmiddleware = async (req, res, next) => {
    try {
     // feedback: fw18_0042 - Instead of token use Authorization in header as standard pratice
        let { token } = req.headers;
        if (!token) {
            return res.status(401).send('operation not allowed, please authorize')
        } else {
            token = token.split(":");
            const [id, email, password] = token
            // feedback: fw18_0042 - Never store passwords in plain text in the DB, use hashing
            // spelling mistakes, format the response message to client
            const user = await User.findOne({ email, password })
            if (!user) {
             
                return res.status(401).send('operation not allowed,alr  eady deleted')
            } else if (user.email !== email || user.password !== password) {
                return res.status(401).send('operation not allowed')
            } else {
                req.userId = id;
                next()
            }
        }
    } catch {
        res.status(401).send('operation not allowed')
    }
}
module.exports = authmiddleware
