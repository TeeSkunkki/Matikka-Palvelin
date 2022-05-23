'use strict';

const express = require('express');
const app = express();
var kuvat = "Kaiffari";

app.post("/", function(req, res){
    console.log(res)
    console.log(req)
    res.send(kuvat)
    
});