import { createContext, useState } from "react"

export const userDataContext = createContext()
const UserContext = ({children}) => {
    const [userData, setUserData] = useState({
        fullName: {
            firstName: "",
            lastName: ""
          },
          Email: "",
          Password: ""
    })
  return (
    <div>
        <userDataContext.Provider value={{userData, setUserData}}>

        {children}
        </userDataContext.Provider>
        </div>
  )
}

export default UserContext