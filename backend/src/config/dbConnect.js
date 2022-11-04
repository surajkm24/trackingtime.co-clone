const mongoose = require('mongoose');

// feeback: fw18_0042 and fw16_644 -  don't put sensitive information directly into the code
// As you push to the github it is visible to all the people who have access to this repo
const connect = ()=>{
    return mongoose.connect("mongodb+srv://newTimeTracking:time1234@cluster0.zevrlzo.mongodb.net/newTimeTracking");
}

module.exports = connect;
