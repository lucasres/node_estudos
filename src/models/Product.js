const mongoose = require('mongoose');

const mongoose_paginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
   title:{
       type: String,
       required:true,
   },
   description:{
       type: String,
       required: true,
   },
   url:{
       type: String,
       required:true,
   },
   created_at:{
       type: Date,
       default: Date.now,
   }
});

//add a paginacao
ProductSchema.plugin(mongoose_paginate);

//Registra o model na app
module.exports = mongoose.model('Product', ProductSchema);