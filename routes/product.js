const express = require("express");
const controller = require("../controllers/product");


const router = express.Router();


router.get("/", controller.getAllProduct);

router.post("/", controller.postProduct);

router.put("/:id", controller.putProduct);

router.delete("/:id", controller.deleteProduct);

router.get("/:id", controller.idProduct);

module.exports = router;