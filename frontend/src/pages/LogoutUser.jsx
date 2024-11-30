import React from 'react'
import axios from 'axios'

const LogoutUser = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    
//TODO: FIX THIS PIECE OF SHIT
    const logoutUser = async () => {
        const response = axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
            Headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data);
            localStorage.removeItem("token");
        }).catch((err) => console.log(err));
        console.log(response.data);
    }

  return (
    <button onClick={logoutUser}>Logout</button>
  )
}

export default LogoutUser