const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name:{
    type:String
  },
  size:[{
    type:String,
    enum:['s','m','l','xl','xxl']
  }],
  quantity:{
    type:Number
  }
},{
  timestamps: true
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product