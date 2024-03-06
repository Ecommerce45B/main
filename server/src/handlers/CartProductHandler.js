const { CreateCartProduct, GetCartProducts } = require('../controllers/CartProductController');
// POST
const CreateProductCart = async (req, res) => {
  try {
    const { idCar, idUser, idProduct, cantidad, monto, estado } = req.body
    const newCarrito = await CreateCartProduct(idCar, idUser, idProduct, cantidad, monto, estado)
    res.status(200).json(`Response: ${newCarrito}`)
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`)
  }
}

// GET
const GetProductCart = async (req, res) => {
  try {
    const { idCar } = req.body
    const cartProducts = await GetCartProducts(idCar)
    res.status(200).json(cartProducts)
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`)
  }
}

module.exports = {
  CreateProductCart,
  GetProductCart
}