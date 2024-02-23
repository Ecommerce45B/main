import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url="http://localhost:3001/votos"

export const getVotosUsuario = createAsyncThunk(
  "dataVotosUsuario",
  async (idUsuario) => {
    console.log(url+'/user/'+idUsuario);
    try {
      const response = await axios.get(`${url}/user/${idUsuario}`);
      localStorage.setItem("dataVotosUsuario", JSON.stringify(response.data));
      return response.data;
    }   
    catch (error) {
      console.log(error);
    }
  }
)

export const getVotos = createAsyncThunk(
  "datosVotos",
  async (id) => {
    console.log(url+id);
    try {
      const response = await axios.get(`${url}/${id}`);
      localStorage.setItem("datosVotos", JSON.stringify(response.data));
      return response.data;
    }   
    catch (error) {
      console.log(error);
    }
  }
)

export const postVotos = createAsyncThunk(
  "votos/new",
  async (votos) => {
    console.log(votos);
    try {
        const response = await axios.post(`${url}/new` , votos);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
  }

)

const votesSlice = createSlice({
  name: 'votos',
  initialState: {
    ranking:[]
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(getVotosUsuario.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getVotosUsuario.fulfilled, (state, action) => {
      state.loading = false;
      state.ranking = action.payload;
      state.error = null;
    })
    .addCase(getVotosUsuario.rejected, (state, action) => {
      state.loading = false;
      state.ranking=[];
      state.error = action.error.message;
    })
    .addCase(getVotos.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getVotos.fulfilled, (state, action) => {
      state.loading = false;
      state.ranking = action.payload;
      state.error = null;
    })
    .addCase(getVotos.rejected, (state, action) => {
      state.loading = false;
      state.ranking=[];
      state.error = action.error.message;
    })
    .addCase(postVotos.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(postVotos.fulfilled, (state, action) => {
      state.loading = false;
      state.ranking = action.payload;
      state.error = null;
    })
    .addCase(postVotos.rejected, (state, action) => {
      state.loading = false;
      state.ranking = "ERROR FORM POST";
      state.error = action.error.message;
    })
  }
});
export default votesSlice.reducer;