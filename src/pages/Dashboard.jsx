import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import PeliculaForm from "../components/peliculaForm"
import Spinner from '../components/Spinner'
import { getPeliculas, reset } from "../features/peliculas/peliculaSlice"
import PeliculaItem from '../components/PeliculaItem'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {peliculas, isLoading, isError, message} = useSelector((state) => state.pelicula)
  
  useEffect(() => {
    if(isError){
      console.log(message);

    }
    if(!user){
      navigate('/login')
    }
    dispatch(getPeliculas)
    return () => {
      dispatch(reset())
    }

},[user,navigate, isError, dispatch, message])

if(isLoading){
  return <Spinner />
}

  return (
    <>
    <section>
      <h2>Bienvenido/a  {user && user.name}</h2>
      <p>Dashboard de Peliculas</p>
    </section>

    <PeliculaForm />

    <section className="content">
      {peliculas.length > 0 ? (
        <div className="tareas">
          {peliculas.map((pelicula)=> (
            <PeliculaItem  key={pelicula._id} pelicula={pelicula}/>
          ))}
        </div>
      ) : (<h3>No hay peliculas para mostrar</h3>)} 
    </section>

    </>
  )
}

export default Dashboard

