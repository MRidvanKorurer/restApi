const Category = require("../models/category");


module.exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        console.log(error);
    }
}


module.exports.getIdCategory = async (req, res) => {
    try {
        const categories = await Category.findById(req.params.id);
        res.send(categories);
    } catch (error) {
        console.log(error);
    }
}



module.exports.postCategory = async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name,
        });

        const newCategory = await category.save();

        res.send(newCategory);
    } catch (error) {
        console.log(error);
    }
}


module.exports.putCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name
            }
        }, {new: true});

        res.send(category);
    } catch (error) {
        console.log(error);
    }
}



module.exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.send(category);
    } catch (error) {
        console.log(error);
    }
}