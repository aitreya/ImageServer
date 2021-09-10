const mongoose = require('mongoose');

const server = '127.0.0.1:27017'; 
const database = 'ImageServer';

mongoose.connect("mongodb://"+server+"/"+database, { useNewUrlParser: true, useUnifiedTopology: true })
const Connection = mongoose.connection;
Connection.on('open',()=>{console.log("DB Connection success")} )
Connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = {Connection};