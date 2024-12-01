import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LogoutUser = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const logoutUser = async () => {
        console.log(token);
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true,
        })

        if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

  return (
    <button onClick={logoutUser}>Logout</button>
  )
}

export default LogoutUser