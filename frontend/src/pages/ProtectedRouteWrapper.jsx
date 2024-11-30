// import React from 'react'
// import { userDataContext } from '../context/userContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRouteWrapper = ({children}) => {
    // const {userData} = React.useContext(userDataContext)
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
    if (!token) {
        navigate("/login")
      }
    }, [token, navigate])
  return (
    <>
        {children}
    </>
  )
}

export default ProtectedRouteWrapper