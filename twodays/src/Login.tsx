import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './inc/NavBar'

function Login() {

  const item ={
    name :'Turkcell',
    year : '20',
    status: true
  }
  
  const navigate= useNavigate()
  const sendData=()=>{
    navigate ('/dashboard', {state: item})
  }

  

  return (
    <>
    <NavBar></NavBar>
    <div>Login</div>
    <button onClick={sendData}>Send Data</button>
</>
  )
}

export default Login