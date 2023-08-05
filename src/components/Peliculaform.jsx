import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import {crearPelicula } from '../features/auth/peliculaSlice'


const PeliculaForm = () => {

const [original_title, setTitle] = useState('')
const dispatch = useDispatch()

const onSubmit = (e) => {
  e.preventDefault()
}


  return (
   <section className='form'>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor ="original_title">Pelicula</label>
        <input 
        type="text" 
        name="original_title" 
        id="original_title"
        value={original_title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        </div>
      <div className="form-group">
        <button className='btn btn-block' type='submit'>
          Agregar titulo de pelicula
        </button>
        </div>
    </form>
   </section>
  )
}

export default PeliculaForm