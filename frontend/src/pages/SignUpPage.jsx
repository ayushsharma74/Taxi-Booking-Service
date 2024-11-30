import { useState } from "react"

const SignUpPage = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [fullName, setFullName] = useState({})
  return (
    <div>
        <h1>SignUpPage</h1>
         {/* Fix this */}
        <form action="" method="post">
            <input type="text" placeholder='first name' onChange={(e) => setFullName(e.target.value)}/>
            <input type="text" placeholder='last name' onChange={(e) => setFullName(e.target.value)} />
            <input type="text" name="" id="" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        </form>
    </div>
  )
}

export default SignUpPage