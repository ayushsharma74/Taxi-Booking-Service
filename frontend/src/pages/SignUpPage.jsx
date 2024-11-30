import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { userDataContext } from "../context/userContext"

const SignUpPage = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    // const [UserData, setUserData] = useState({})

    const navigate = useNavigate()
    const {userData, setUserData} = React.useContext(userDataContext)

    const onSubmit = async (e) => {
        e.preventDefault()
        const requestBody = {
            fullName: {
                firstName: FirstName,
                lastName: LastName
            },
            email: Email,
            password: Password
        }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, requestBody)

      if (response.status === 201) {
        setUserData(response.data.user)
        localStorage.setItem("token", response.data.token)
        navigate("/login")
      }
        
    }
  return (
    <div>
        <h1>SignUpPage</h1>
        <form action="" method="post" onSubmit={(e) => onSubmit(e)}>
            <input type="text" placeholder='first name' onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)} />
            <input type="text" name="" id="" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create account</button>
        </form>
    </div>
  )
}

export default SignUpPage