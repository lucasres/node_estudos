var express = require('express');
var mongoose = require('mongoose');

var app = express();

//config db
db = mongoose.connect('mongoose://root:root@mongo:27017/');

app.get('/',function(req,res){
    res.send('First Node Server heheh');
});

app.listen('3000',function(){
    console.log('Server listening on 3000 port');
});