import axios from 'axios'

const API_URL = 'https://fair-clam-kerchief.cyclic.app/api/peliculas/'

//crear pelicula
const crearPelicula = async (peliculaData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await  axios.post(API_URL, peliculaData, config)
  return response.data
} 
//Get tareas
const getPeliculas= async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await  axios.get(API_URL, config)
  return response.data
} 
//Borrar una pelicula
const deletePelicula = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await  axios.delete(API_URL + id, config)
  return response.data
} 

const peliculaService = {
  crearPelicula,
  getPeliculas,
  deletePelicula
}

export default peliculaService