const mongoose = require('mongoose');
require('dotenv').config();

// feeback: fw18_0042 and fw16_644 -  don't put sensitive information directly into the code
// As you push to the github it is visible to all the people who have access to this repo
const connect = ()=>{
    return mongoose.connect(process.env.MONGOURL);
}

module.exports = connect;
