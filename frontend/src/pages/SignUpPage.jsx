import { useState } from "react"

const SignUpPage = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [UserData, setUserData] = useState({})

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(Email, Password, FirstName, LastName);
        setUserData({
          fullName: {
            firstName: FirstName,
            lastName: LastName
          },
          Email,
          Password
        })
    }
  return (
    <div>
        <h1>SignUpPage</h1>
        <form action="" method="post">
            <input type="text" placeholder='first name' onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)} />
            <input type="text" name="" id="" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        </form>
    </div>
  )
}

export default SignUpPage