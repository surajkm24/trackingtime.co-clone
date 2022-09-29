const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://Timetracking:time123@cluster0.ojlqm0r.mongodb.net/?retryWrites=true&w=majority/tracking-time");
}

module.exports = connect;