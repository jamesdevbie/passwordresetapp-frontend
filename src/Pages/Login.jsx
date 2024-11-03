import React, { useContext, useEffect, useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ShowContext from '../Context/ShowContext'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const { setShowLogin, setShowSignup } = useContext(ShowContext)

  useEffect(() => {
    setShowLogin(false)
    setShowSignup(true)

    //    setShowSignup(true)
  }, [])

  //const URL = 'https://fsd-auth-backend-ejk8.onrender.com/api/auth/register'
  const URL = 'http://localhost:5000/api/auth/login'
  const payLoad = { email, password }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(URL, payLoad)

      if (response.data.message == 'User Logged In Successfully') {
        toast.success(response.data.message)
        setToken(response.data.token)
        navigate('/landingpage')
      }
    } catch (e) {
      toast.error(e.response.data.message)
    }
  }
  return (
    <div>
      <Navbar />

      <div className="w-[150%]">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@domain.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <div className="relative">
              <input
                type={!showPassword ? 'password' : 'text'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                placeholder="Strong Password"
              />
              {!showPassword ? (
                <BiShow
                  className="absolute right-2 top-3"
                  onClick={(e) => setShowPassword(!showPassword)}
                />
              ) : (
                <BiHide
                  className="absolute right-2 top-3"
                  onClick={(e) => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <div className="text-center">
            <Link to={'/forgotpassword'}>Forgot Password? Click here</Link>
          </div>
          <div className="text-center p-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
