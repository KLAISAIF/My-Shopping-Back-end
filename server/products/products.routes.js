const {
  getProductByIdCategoryController,
  getAllProductController
      } = require("./products.controller");
    
    const router = require("express").Router();

    router.get("/getProductByIdCategory",getProductByIdCategoryController);
    router.get("/getAllProducts",getAllProductController);

    module.exports = router;