import { createSlice } from '@reduxjs/toolkit'

const CarritoSlice = createSlice({
  name: 'productsCarrito',
  initialState: {
    productsCarrito: []
  },
  reducers: {
    addProduct(state, action) {

      const existingProductIndex = state.productsCarrito.findIndex((product) => product.id === action.payload.id)

      if (existingProductIndex !== -1) {
        state.productsCarrito[existingProductIndex].cantidad += 1
      }
      else {
        const usuarioAlmacenado = localStorage.getItem("user")
        const usuario = JSON.parse(usuarioAlmacenado)
        state.productsCarrito.push({ id_user: usuario.id, ...action.payload, cantidad: 1 })
      }
    },
    removeProducto(state, action) {
      const productToRemove = state.productsCarrito.find(
        (product) => product.id === action.payload
      )

      if (productToRemove) {
        const index = state.productsCarrito.indexOf(productToRemove)
        state.productsCarrito.splice(index, 1)
      }
    },
  },
})

export const { addProduct, removeProducto } = CarritoSlice.actions
export default CarritoSlice.reducer
