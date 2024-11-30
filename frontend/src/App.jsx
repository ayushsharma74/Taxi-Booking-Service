import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import DriverLogin from "./pages/DriverLogin"
import DriverSignUp from "./pages/DriverSignUp"
import { useContext } from "react"
import { userDataContext } from "./context/userContext"
import Landing from "./pages/Landing"
import ProtectedRouteWrapper from "./pages/ProtectedRouteWrapper"
import Home from "./pages/Home"
import LogoutUser from "./pages/LogoutUser"



const App = () => {
  const ans = useContext(userDataContext)
  console.log(ans);
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<ProtectedRouteWrapper><Home /></ProtectedRouteWrapper>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-signup" element={<DriverSignUp />} />
        <Route path="/user/logout" element={<ProtectedRouteWrapper><LogoutUser /> </ProtectedRouteWrapper>} />
      </Routes>
    </div>
  )
}

export default App