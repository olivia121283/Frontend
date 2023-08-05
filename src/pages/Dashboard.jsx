import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PeliculaForm from "../components/peliculaForm"

const Dashboard = () => {

  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  
  useEffect (() => {
    if(!user){
      navigate('/login')
    }
},[user, navigate])


  return (
    <>
    <section>
      <h2>Bienvenido/a  {user && user.name}</h2>
      <p>Dashboard de Peliculas</p>
    </section>

    <PeliculaForm />
    </>
  )
}

export default Dashboard

