var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
//permite que a aplicacao user json
app.use(express.json());
//add cors para que outros dominios possam acessar nossa api
app.use(cors());
//config db
console.log('inicio conecao com o mongodb');
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