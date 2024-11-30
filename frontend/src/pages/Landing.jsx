import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <h1 className='text-3xl mb-2'>TAXI SERVCE APP</h1>
        <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={'/login'}>Login</Link>
    </div>
  )
}

export default Landing