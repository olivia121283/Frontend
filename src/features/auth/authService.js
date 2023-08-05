import axios from 'axios'

const API_URL = 'https://fair-clam-kerchief.cyclic.app/api/users/'

// crear un usuario
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  return response.data
}

// Login usuario
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login' , userData)

  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

//logout
const logout = () =>{
  localStorage.removeItem('user')
}

const authService = {
  register,
  login, 
  logout
}

export default authService