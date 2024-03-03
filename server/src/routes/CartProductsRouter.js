const { Router } = require("express")

const { CreateProductCart } = require('../handlers/CartProductHandler')

const carProductRouter = Router();

carProductRouter.post("/new"     ,CreateProductCart);

module.exports = carProductRouter;