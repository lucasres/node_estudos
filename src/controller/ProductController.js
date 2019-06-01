const mongoose = require('mongoose');

const Product = require('../models/Product');

module.exports = {
    async index(req,res) {
        //recupera todos os produtos
        const products = await Product.find();
        //responde tudo
        return res.json(products);
    },

    async store(req,res) {
        product = await Product.create(req.body);

        return res.json(product,201);
    },

    async show(req,res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async update(req,res){
        //atualiza
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        return res.json(product);
    },
};