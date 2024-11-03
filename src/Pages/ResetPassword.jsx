import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../Components/Navbar'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { randomstring } = useParams()

  const payLoad = { password }
  const URL = `https://passwordresetapp-backend.onrender.com/api/auth/reset-password/${randomstring}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL, payLoad)
      if (response) {
        toast.success(response.data.message)
        navigate('/login')
      }
    } catch (e) {
      toast.error(e.response.data.message)
    }

    // toast.error(error.response.data.message)
  }
  return (
    <div>
      <Navbar />
      <div className="w-[150%]">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
