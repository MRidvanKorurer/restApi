const Product = require("../models/product");


module.exports.getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.send(product);
    } catch (error) {
        console.log(error);
    }
  
}


module.exports.postProduct = (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isActive: req.body.isActive
        });

        const results = product.save();
        res.send(results);
    } catch (error) {
        console.log(error);
    }
}


module.exports.putProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                isActive: req.body.isActive
            }
        }, {new: true});

        res.send(product);
    } catch (error) {
        console.log(error);
    }
}


module.exports.deleteProduct = async (req, res) => {
    try {   
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        res.send(product);
    } catch (error) {
        console.log(error);
    }
}


module.exports.idProduct =  async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (error) {
        console.log(error);
    }
}