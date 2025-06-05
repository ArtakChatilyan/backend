const express = require("express");
const fs = require("fs");
const path = require("path");
const subcategoryController = require("../controllers/subcategory.controller");
const router = express.Router();

router.get('/', subcategoryController.getSubCategories);
module.exports=router;