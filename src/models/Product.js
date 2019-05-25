const mongoose = require('mongoose');

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

//Registra o model na app
module.exports = mongoose.model('Product', ProductSchema);