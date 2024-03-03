const { CartUsers } = require('../config/bd');

const CreateCarrito = async (idUser) => {
  try {
    const newCarrito = CartUsers.create({idUser})
    return newCarrito
  } catch (error) {
    return error.message
  }
}

module.exports = {
  CreateCarrito
}