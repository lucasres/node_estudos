const mongoose = require('mongoose');

const Product = require('../models/Product');

module.exports = {
    async index(req,res) {
        //recupera todos os produtos
        const products = await Product.find();
        //responde tudo
        return res.json(products);
    },
};