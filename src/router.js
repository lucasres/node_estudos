const express = require('express');

//criando um Router
const router = express.Router();

//import o controller do products
const ProductController = require('./controller/ProductController');

router.get('/products/',ProductController.index);
router.post('/products/',ProductController.store);
router.get('/products/:id',ProductController.show);
router.put('/products/:id',ProductController.update);
router.delete('/products/:id',ProductController.destroy);

module.exports = router;