const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const PORT = 3001;
const route = require('../src/Routes')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(route);

app.listen(PORT,()=>{
    console.log("App running successfully");
})