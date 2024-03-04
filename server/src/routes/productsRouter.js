const { Router } = require("express");
const {
  getProductsHandler,
  getProductsDetailHandler,
  postNewProductHandler,
  changeProductHandler,
  deleteProductHandler,
  getProductsByNameHandler,
  changeProductStockHandler,
} = require("../handlers/productsHandler");

const productsRouter = Router();

productsRouter.get("/", getProductsHandler);
productsRouter.get("/nombre/", getProductsByNameHandler);
productsRouter.get("/:id", getProductsDetailHandler);
productsRouter.post("/new", postNewProductHandler);
productsRouter.put("/change/:id", changeProductHandler);
productsRouter.delete("/delete/", deleteProductHandler);
productsRouter.patch("/stock", changeProductStockHandler);

module.exports = productsRouter;
