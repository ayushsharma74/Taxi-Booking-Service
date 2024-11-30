import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [UserData, setUserData] = useState({})

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(Email, Password);
        setUserData({Email, Password})
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