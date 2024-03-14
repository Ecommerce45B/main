import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:3001";

import axios from "axios";

export const getProductos = createAsyncThunk(
  "productos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/productos`);

      const productosActivos = response.data.filter(
        (producto) => producto.estado === true
      );

      return productosActivos;
    } catch (error) {
      console.log(error);
      return rejectWithValue([]);
    }
  }
);

export const getById = createAsyncThunk("detalleProductos", async (id) => {
  try {
    const response = await axios.get(`${url}/productos/${id}`);

    localStorage.setItem("detalleProductos", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getByName = createAsyncThunk(
  "productosTraidos",
  async (nombre) => {
    try {
      const response = await axios.get(
        `${url}/productos/nombre/?nombre=${nombre}`
      );

      const productosFiltrados = response.data.filter(
        (producto) => producto.estado === true
      );

      localStorage.setItem(
        "productosTraidos",
        JSON.stringify(productosFiltrados)
      );

      return productosFiltrados;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postProducto = createAsyncThunk(
  "productos/new",
  async (product) => {
    console.log(product);
    try {
      const response = await axios.post(`${url}/productos/new`, product);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCategories = createAsyncThunk("categorias", async () => {
  try {
    const response = await axios.get(`${url}/categorias`);

    const filteredCategorias = response.data.filter(
      (categoria) => categoria.estado === true
    );
    return filteredCategorias;
  } catch (error) {
    console.log(error);
  }
});

export const getMarcas = createAsyncThunk("marcas", async () => {
  try {
    const response = await axios.get(`${url}/marcas`);

    const filteredMarcas = response.data.filter(
      (marca) => marca.estado === true
    );
    return filteredMarcas;
  } catch (error) {
    console.log(error);
  }
});

const productoSlice = createSlice({
  name: "productos",
  initialState: {
    loading: false,
    products: [],
    detalleProductos: [],
    categories: [],
    productosTraidos: [],
    marcas: [],
    error: null,
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
        };
        const existingProduct = state.products.find(
          (element) => element.id === format.id
        );
        if (!existingProduct) state.products.push(format);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.loading = false;
        state.detalleProductos = action.payload;
        state.error = null;
      })
      .addCase(getById.rejected, (state, action) => {
        state.loading = false;
        state.detalleProductos = [];
        state.error = action.error.message;
      })

      .addCase(getByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getByName.fulfilled, (state, action) => {
        state.loading = false;
        state.productosTraidos = action.payload;
        state.error = null;
      })
      .addCase(getByName.rejected, (state, action) => {
        state.loading = false;
        state.productosTraidos = [];
        state.error = action.error.message;
      })

      .addCase(getProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProductos.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      })

      .addCase(postProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(postProducto.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })

      .addCase(postProducto.rejected, (state, action) => {
        state.loading = false;
        state.products = "ERROR FORM POST";
        state.error = action.error.message;
      })

      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })

      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.categories = [];
        state.error = action.error.message;
      })

      .addCase(getMarcas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getMarcas.fulfilled, (state, action) => {
        state.loading = false;
        state.marcas = action.payload;
        state.error = null;
      })

      .addCase(getMarcas.rejected, (state, action) => {
        state.loading = false;
        state.marcas = [];
        state.error = action.error.message;
      });
  },
});

export default productoSlice.reducer;
export const { addProduct } = productoSlice.actions;
