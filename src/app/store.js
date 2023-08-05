import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import peliculaReducer from '../features/peliculas/peliculaSlice'

export const store = configureStore ({
  reducer: {
    auth: authReducer,
    pelicula: peliculaReducer
  }
})