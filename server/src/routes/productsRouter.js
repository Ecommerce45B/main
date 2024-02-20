const { Router } = require('express')
const { 
  getProductsHandler,
  getProductsDetailHandler,
  postNewProductHandler,
  changeProductHandler,
  deleteProductHandler,
  getProductsByNameHandler,
  changeProductStockHandler
} = require('../handlers/productsHandler')

const productsRouter = Router()

productsRouter.get("/"          , getProductsHandler)
productsRouter.get("/:id"       , getProductsDetailHandler)
productsRouter.get('/name/'     , getProductsByNameHandler);
productsRouter.post("/new"      , postNewProductHandler)
productsRouter.put("/change/ "  , changeProductHandler)
productsRouter.delete("/delete/", deleteProductHandler)
productsRouter.patch("/stock"   , changeProductStockHandler)

module.exports = productsRouter