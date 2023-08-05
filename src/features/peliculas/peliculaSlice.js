import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import peliculaService from './peliculaService'


const initialState = {
  peliculas: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//Crear una nueva pelicula
export const crearPelicula = createAsyncThunk('peliculas/crear', async(peliculaData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await peliculaService.crearPelicula(peliculaData, token)
    } catch (error) {
    const message = (error.response && error.response.data && error. response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//obtener la lista de peliculas
export const getPeliculas = createAsyncThunk('peliculas/getAll', async(_, thunkAPI) =>{
  try {
    const token = thunkAPI.getState().auth.user.token
    return await peliculaService.getPeliculas(token)
    } catch (error) {
    const message = (error.response && error.response.data && error. response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//Eliminar una  pelicula
export const deletePelicula = createAsyncThunk('peliculas/delete', async(id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await peliculaService.deletePelicula(id, token)
    } catch (error) {
    const message = (error.response && error.response.data && error. response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})


export const peliculaSlice = createSlice ({
name: 'pelicula',
initialState,
reducers: {
  reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(crearPelicula.pending, (state) => {
      state.isLoading = true
    })
    .addCase(crearPelicula.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.peliculas.push(action.payload)
    })
    .addCase(crearPelicula.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(getPeliculas.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getPeliculas.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.peliculas = action.payload
    })
    .addCase(getPeliculas.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(deletePelicula.pending, (state) => {
      state.isLoading = true
    })
    .addCase(deletePelicula.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.peliculas = state.peliculas.filter((pelicula)=> pelicula._id !== action.payload.id)
    })
    .addCase(deletePelicula.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }
})

export const {reset} = peliculaSlice.actions
export default peliculaSlice.reducer