const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/task'

mongoose.connect(url);
const conn = mongoose.connection;

conn.on('connected',()=>{
    console.log('connected to db');
})

conn.on('disconnected',()=>{
    console.log('disconnected from db');
})

conn.on('err',()=>{
    console.log('did not connected to db');
})