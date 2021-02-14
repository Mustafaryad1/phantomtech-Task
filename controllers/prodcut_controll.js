const Product = require('../models/product');
const Customer = require('../models/customer');

const findProduct = async (req,res)=>{
  const product = await Product.findOne({'_id':req.params.id});
  if(!product){
    res.status(404).send({success:false,message:"product not exists"});
  }
  res.send({success:true,data:product});
};


const addToCart = async (req,res)=>{
  const product = await Product.findOne({'_id':req.params.id});
  if(!product){
    res.status(404).send({success:false,message:"product not exists"});
  }
  const customer = await Customer.findOne()
  console.log(customer);
  customer.myCart.push(product._id)
  await customer.save().then(data =>  res.send({success:true,data}))

};




module.exports = {findProduct,addToCart};