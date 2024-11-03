import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ShowContext from '../Context/ShowContext'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const { setShowLogin, setShowSignup } = useContext(ShowContext)

  useEffect(() => {
    setShowLogin(true)
    setShowSignup(true)
  }, [])

  const payLoad = { email }
  const URL = 'http://localhost:5000/api/auth/forgot-password'

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(URL, payLoad)

      if (response) {
        navigate('/')
        toast.success('Password Reset Link Sent via Email')
      }
    } catch (e) {
      toast.error(e.response.data.message)
    }

    // toast.error(error.response.data.message)
  }
  return (
    <>
      <Navbar />
      <div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5 w-[150%]">
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
              placeholder="name@domain.com"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword
