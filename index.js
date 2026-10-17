const express=require('express');
const mongoose =require('mongoose');
const url='mongodb://localhost/mycode';

const app=express();

app.use(express.json())



mongoose.connect(url);
const con=mongoose.connection;

con.on('open', function(){
    console.log("server started");
})

const codeRouter= require('./routes/first');
app.use('/first', codeRouter);

app.listen(9000, function(){
    console.log('server running');
})