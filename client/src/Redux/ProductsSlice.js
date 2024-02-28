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
    }

    try {
      const response = await axios(config)
      const productsDB = response.data.map((producto) => {
        const format = {
          id: producto.id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          imagen: producto.imagen,
          nroserie: producto.nroserie,
          nromac: producto.nromac,
          stock: producto.stock,
          minimo: producto.minimo,
          preferencia: producto.preferencia,
          estado: producto.estado,
          idCategoria: producto.idCategoria,
          idMarca: producto.idMarca,
          idFabricante: producto.idFabricante ,
          rating: producto.rating
        }
        return format
      })
      return await productsDB
    } catch (error) {
      return { error: error.message }
    }
  }
)

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [...InitialContent]
  },
  reducers: {
    addProduct(state, action) {
      const format = {
        id: action.payload[0].id,
        nombre: action.payload[0].nombre,
        descripcion: action.payload[0].descripcion,
        imagen: action.payload[0].imagen,
        nroserie: action.payload[0].nroserie,
        nromac: action.payload[0].nromac,
        stock: action.payload[0].stock,
        minimo: action.payload[0].minimo,
        preferencia: action.payload[0].preferencia,
        estado: action.payload[0].estado,
        idCategoria: action.payload[0].idCategoria,
        idMarca: action.payload[0].idMarca,
        idFabricante: action.payload[0].idFabricante, 
        rating: action.payload[0].rating 
      }
      const existingProduct = state.products.find((element) => element.id === format.id)
      if(!existingProduct) state.products.push(format)
    }
  }
})

export const { addProduct, removeProduct } = ProductsSlice.actions
export default ProductsSlice.reducer