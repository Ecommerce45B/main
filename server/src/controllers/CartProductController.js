const { CartProducts } = require('../config/bd');

const CreateCartProduct = async (idCar, idUser, idProduct, cantidad, monto, estado) => {
  try {
    let existingProduct = await CartProducts.findOne({where: {idProduct}})
    if(!existingProduct){
      const newCarProduct = await CartProducts.create({
        idCar,
        idUser,
        idProduct,
        cantidad,
        monto,
        estado
      })
      return newCarProduct
    }
    else{
      // Si el producto ya está en el carrito, sumar la cantidad
      existingProduct.cantidad += cantidad;
      await existingProduct.save();
      return existingProduct;
    }
  } catch (error) {
    return error.message
  }
}

module.exports = {
  CreateCartProduct
}



// const { CartProducts } = require('../config/bd')
// const { CartUsers } = require('../config/bd');

// const CreateCartProduct = async (idCar, idUser, idProduct, cantidad, monto, estado) => {
//   try {
    
//     // Verificar si ya existe un carrito para el usuario
//     let carrito = await CartUsers.findOne({ where: { idUser } })

//     if (!carrito) {
//       // Si no hay un carrito existente, crear uno nuevo
//       carrito = await CartUsers.create({ idUser })
//     }

//     // Verificar si el producto ya está en el carrito
//     const existingProduct = await CartProducts.find({where: {idProduct}})

//     if (existingProduct) {
//       // Si el producto ya está en el carrito, sumar la cantidad
//       existingProduct.cantidad+=cantidad
//       await existingProduct.save()
//       return existingProduct
//     } 
//     else {
//       // Si el producto no está en el carrito, agregarlo
//       const newCartProduct = await CartProducts.create({idCar, idUser, idProduct, cantidad, monto, estado})
//       return newCartProduct
//     }
//   } catch (error) {
//     return error.message
//   }
// }

// module.exports = {
//   CreateCartProduct
// }