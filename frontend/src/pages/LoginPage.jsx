import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoginPage = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(Email, Password);
        const reqData = {
          email: Email,
          password: Password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, reqData)

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token)
          console.log(response.data);
          navigate("/home")
        }
    }
  return (
    <div>
        <h1>Login To App as user</h1>
        <form action="" method="post" className='flex flex-col items-start' onSubmit={(e) => onSubmit(e)}>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}  value={Email}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={Password} />
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
        </form>
        <Link to={'/signup'} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</Link>
    </div>
  )
}

export default LoginPage