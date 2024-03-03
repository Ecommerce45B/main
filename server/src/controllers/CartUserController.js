const { CartUsers } = require('../config/bd');

const CreateCarrito = async (idUser) => {
  try {
    const existingCarrito = await CartUsers.findOne({ where: { idUser } });

    if (existingCarrito) {
      throw new Error('Ya existe un carrito para este usuario');
    }

    const newCarrito = await CartUsers.create({ idUser });
    return newCarrito
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  CreateCarrito
};
