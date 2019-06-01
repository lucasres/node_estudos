const mongoose = require('mongoose');

const Product = require('../models/Product');

module.exports = {
    async index(req,res) {
        const { page = 1 } = req.query;
        //recupera todos os produtos
        const products = await Product.paginate({},{page,limit:10});
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