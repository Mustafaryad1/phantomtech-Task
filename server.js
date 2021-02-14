const express = require('express');
const mongoose = require('mongoose');

const product_routes = require('./routes/product_routes')


const app = express();

//config database
const Product = require('./models/product');
const Customer = require('./models/customer');
mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  productData = {name:'t-shirt',size:['s','m','l','xl','xxl'],quantity:5};
  customerData = {name:'c1'};
  const product = new Product(productData);
  const customer = new Customer(customerData);
  await product.save().then(data => console.log(`product ${data.name} has been created`));
  customer.myCart.push(product._id);
  await customer.save().then(data => console.log(`customer ${data.name} has been created`));
  console.log('database connected');
});


// config routes
app.get('/',(req,res)=>{res.send({home:'Home page'})})
app.use('/product',product_routes);




app.listen(3000,()=>{
  console.log('Server running on port 3000');
})



