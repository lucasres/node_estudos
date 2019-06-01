const express = require('express');

//criando um Router
const router = express.Router();

//import o controller do products
const ProductController = require('./controller/ProductController');

router.get('/products',ProductController.index);

module.exports = router;