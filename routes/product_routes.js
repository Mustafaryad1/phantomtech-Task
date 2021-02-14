const router = require('express').Router();
const productControll = require('../controllers/prodcut_controll');

// router.get('/',(req,res)=>{res.send({product:'product'})})
router.get('/details/:id',productControll.findProduct);
router.post('/add-to-cart/:id',productControll.addToCart);


module.exports = router
