// Used as entry for development server only
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-register');
require('./app');

/*const express = require('express');
const app =express();

app.get ('/',(req,res)=>{
res.send("Home");
});
app.listen(3000);*/