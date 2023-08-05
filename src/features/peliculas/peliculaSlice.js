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
  }
})

export const {reset} = peliculaSlice.actions
export default peliculaSlice.reducer