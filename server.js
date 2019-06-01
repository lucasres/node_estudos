var express = require('express');
var mongoose = require('mongoose');

var app = express();

//config db
console.log('inicio conecao');
try{
    db = mongoose.connect('mongodb://mongo:27017/nodeapi',{ useNewUrlParser: true });
} catch(e) {
    console.log('deu erro na conecao com o mongodb');
    console.log(e);
}

app.use('/api',require('./src/router'));

app.listen('3000',function(){
    console.log('Server listening on 3000 port');
});