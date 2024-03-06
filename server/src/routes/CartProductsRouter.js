const { Router } = require("express")

const { CreateProductCart, GetProductCart } = require('../handlers/CartProductHandler')

const carProductRouter = Router()

carProductRouter.post("/new"     ,CreateProductCart)
carProductRouter.get("/get"     ,GetProductCart)

module.exports = carProductRouter;