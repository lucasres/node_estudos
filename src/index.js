var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('Lorem');
});

app.listen('3000',function(){
    console.log('Server listening on 3000 port');
});