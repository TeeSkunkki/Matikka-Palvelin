'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
var kuvat = ["1","2","3","4","5","6","7","8","9","0"];

app.get("/Kuvat", function(req, res){
    console.log(req.route);
    res.send(fs.readdirSync('./Public/KaikkiKuvat/'));
});
app.get('/Kuvat/*/',function(req, res){
    var asda = req.url;
    asda = asda.split('/').splice(2,2);
    console.log(asda[0] + " " + asda[1] + " Kaiffarointi 1");
    res.send(fs.readdirSync('./Public/KaikkiKuvat/' + asda[0] + '/' + asda[1]));
});
//app.get('/Kuvat/*/?*',function(req, res){
/*    var asda = req.url;
    asda = asda.split('/').splice(2,2);
    console.log(asda + " Kaiffarointi 2");
    res.send(fs.readdirSync('./Public/KaikkiKuvat/' + asda + '/'));
});*/

app.use(express.static("Public"));

app.listen(49011, function(){
    console.log("Kaiffarointi alotettu.")
});