const { CartProducts } = require('../config/bd');

const CreateCartProduct = async (idCar, idUser, idProduct, cantidad) => {
  try {
    const newCarProduct = CartProducts.create({
      idCar,
      idUser,
      idProduct,
      cantidad
    })
    return newCarProduct
  } catch (error) {
    return error.message
  }
}

module.exports = {
  CreateCartProduct
}


// const { CartProducts } = require('../config/bd')

// const CreateCartProduct = async (idCar, idUser, idProduct, cantidad) => {
//   try {
    
//     // Verificar si ya existe un carrito para el usuario
//     let carrito = await CartUsers.findOne({ where: { idUser } })

//     if (!carrito) {
//       // Si no hay un carrito existente, crear uno nuevo
//       carrito = await CartUsers.create({ idUser })
//     }

//     // Verificar si el producto ya está en el carrito
//     const existingProduct = CartProducts.find(producto => producto.idProduct === idProduct)

//     if (existingProduct) {
//       // Si el producto ya está en el carrito, sumar la cantidad
//       existingProduct.cantidad += cantidad
//       await existingProduct.save()
//       return existingProduct
//     } else {
//       // Si el producto no está en el carrito, agregarlo
//       const newCartProduct = await CartProducts.create({idCar, idUser, idProduct, cantidad})
//       return newCartProduct
//     }
//   } catch (error) {
//     return error.message
//   }
// }

// module.exports = {
//   CreateCartProduct
// }