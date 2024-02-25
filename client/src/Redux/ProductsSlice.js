import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import InitialContent from './InitialContent'

const LinkGetProductos = 'http://localhost:3001/productos'

export const getProducts = createAsyncThunk(
  'carrito/obtener',
  async () => {

    const config = {
      method: 'get',
      url: `${LinkGetProductos}`
    };

    try {
      const response = await axios(config);
      return await response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [...InitialContent]
  },
  reducers: {
    addProduct(state, action) {
      const format = {
        id: action.payload[0].id,
        name: action.payload[0].nombre,
        description: action.payload[0].descripcion,
        image: action.payload[0].imagen,
        productType: action.payload[0].idCategoria,
        price: action.payload[0].precio,
        rating: 3,
        timeLeft: 27,
        totalSales: 7479,
      }
      const existingProduct = state.products.find((element) => element.id === format.id);
      if(!existingProduct)state.products.push(format)
    },
    removeProduct(state, action) {
      const index = state.findIndex((product) => product.id === action.payload)
      state.products.splice(index, 1)
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer