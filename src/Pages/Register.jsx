import React, { useContext, useEffect, useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ShowContext from '../Context/ShowContext'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  //   const [showlogin, setShowLogin] = useState(true)
  // const [showsignup, setShowSignup] = useState(true)

  const { setShowSignup, setShowLogin } = useContext(ShowContext)

  useEffect(() => {
    setShowSignup(false)
    setShowLogin(true)
  }, [])

  //const URL = 'https://fsd-auth-backend-ejk8.onrender.com/api/auth/register'
  const URL = 'http://localhost:5000/api/auth/register'
  const payLoad = { name, email, password }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(URL, payLoad)
      if (response) {
        toast.success(response.data.message)
        navigate('/')
      }
    } catch (error) {
      toast.error(error.data.response.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="w-[150%]">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Your good name"
            />
          </div>
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
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
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
          <div className="text-center ">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
