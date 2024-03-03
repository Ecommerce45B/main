const { CartProducts } = require('../config/bd')

const CreateCartProduct = async (idCar, idUser, idProduct, cantidad) => {
  try {
    const newCartProduct = CartProducts.create({idCar, idUser, idProduct, cantidad})
    return newCartProduct
  } catch (error) {
    return error.message
  }
}

module.exports = {
  CreateCartProduct
}