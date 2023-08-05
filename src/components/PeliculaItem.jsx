import { useDispatch } from "react-redux"
import {deletePelicula} from '../features/peliculas/peliculaSlice'

const PeliculaItem = ({ pelicula }) => {

  const dispatch = useDispatch()

  return (
    <div className="tarea">
      <div>
        {new Date(pelicula.createdAt).toLocaleString('es-MX')}
      </div>
      <h3>{pelicula.original_title}</h3>
      <button onClick={()=> dispatch(deletePelicula(pelicula._id))} className="close">X</button>
    </div>
  )
}

export default PeliculaItem