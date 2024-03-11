import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import InitialContent from "./InitialContent"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import InitialContent from "./InitialContent"

const LinkGetProductos = "http://localhost:3001/productos"
const LinkGetProductos = "http://localhost:3001/productos"

export const getProducts = createAsyncThunk("carrito/obtener", async () => {
  try {
    const response = await axios.get(LinkGetProductos)
    return response.data
  } catch (error) {
    return { error: error.message }
  }
})
export const getProducts = createAsyncThunk("carrito/obtener", async () => {
  try {
    const response = await axios.get(LinkGetProductos)
    return response.data
  } catch (error) {
    return { error: error.message }
  }
})

const ProductsSlice = createSlice({
  name: "products",
  name: "products",
  initialState: {
    //products: [...InitialContent]
    products: []
    //products: [...InitialContent]
    products: []
  },
  reducers: {
    addProduct(state, action) {
      action.payload.forEach((product) => {
        const format = {
          id: product.id,
          nombre: product.nombre,
          descripcion: product.descripcion,
          especificaciones: product.especificaciones,
          imagen: product.Imagenes.length > 0 ? product.Imagenes[0].url : "",
          nroserie: product.nroserie,
          nromac: product.nromac,
          precio: product.precio,
          stock: product.stock,
          minimo: product.minimo,
          preferencia: product.preferencia,
          estado: product.estado,
          Categoria: {
            id: product.Categoria.id,
            nombre: product.Categoria.nombre,
            descripcion: product.Categoria.descripcion,
            estado: product.Categoria.estado,
          },
          Marca: {
            id: product.Marca.id,
            nombre: product.Marca.nombre,
            descripcion: product.Marca.descripcion,
            estado: product.Marca.estado,
          },
          Fabricante: {
            id: product.Fabricante.id,
            nombre: product.Fabricante.nombre,
            descripcion: product.Fabricante.descripcion,
            estado: product.Fabricante.estado,
          },
        }
        const existingProduct = state.products.find(
          (element) => element.id === format.id
          )
        if (!existingProduct) state.products.push(format)
      })
    },
  },
})

export const { addProduct, removeProduct } = ProductsSlice.actions
export default ProductsSlice.reducer

