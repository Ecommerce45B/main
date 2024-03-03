const { CreateCartProduct } = require('../controllers/CartProductController');
// POST
const CreateProductCart = async (req, res) => {
  try {
    const { idCar, idUser, idProduct, cantidad } = req.body
    const newCarrito = CreateCartProduct.create(idCar, idUser, idProduct, cantidad)
    res.status(200).json(`Response: ${newCarrito}`)
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`)
  }
}

module.exports = {
  CreateProductCart
}