const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product");
const categoriesRoute = require("./routes/category");


const app = express();

app.use(express.json());

app.use("/api/product", productRoute);
app.use("/api/categories", categoriesRoute);

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://ridvankorurer:Efeece123.@cluster0.smi3zja.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database bağlantısı yapıldı");
    } catch (error) {
        console.log(error);
    }
}

conn();

app.listen(3000, () => {
    console.log("Application running on port: 3000");
});

