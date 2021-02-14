const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  name:{
    type:String
  },
  myCart:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }]
},{
  timestamps: true
});

const Customer = mongoose.model('Customer',CustomerSchema);
module.exports = Customer