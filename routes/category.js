const express = require("express");
const categoryController = require("../controllers/category");


const router = express.Router();


router.get("/", categoryController.getCategories);

router.get("/:id", categoryController.getIdCategory);

router.post("/", categoryController.postCategory);

router.put("/:id", categoryController.putCategory);

router.delete("/:id", categoryController.deleteCategory);



module.exports = router;