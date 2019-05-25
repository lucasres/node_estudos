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
//registra o model
require('./src/models/Product');

const Product = mongoose.model('Product');

app.get('/',function(req,res){
    Product.create({
        title:'a',
        description:'b',
        url:'c'
    });
    console.log('criou');
    
    return res.send('First Nod e Server heheh');
});

app.listen('3000',function(){
    console.log('Server listening on 3000 port');
});