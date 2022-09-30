const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://newTimeTracking:time1234@cluster0.zevrlzo.mongodb.net/newTimeTracking");
}

module.exports = connect;