import axios from 'axios'

const API_URL = 'https://fair-clam-kerchief.cyclic.app/api/peliculas/'

//crear pelicula

const crearPelicula = async (peliculaData, token) => {
  config = {
    headers : {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await  axios.post(API_URL, peliculaData, config)
  return response.data

} 


const peliculaService = {
  crearPelicula
}

export default peliculaService