import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ShowContext from '../Context/ShowContext'

const Navbar = () => {
  const { showLogin, showSignup } = useContext(ShowContext)
  const url = useLocation()
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={'/'}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.freepik.com/premium-vector/password-reset-icon-apps-web_116137-6609.jpg"
              className="h-12 w-12 rounded-l-lg"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PwdRST
            </span>
          </Link>
          <div className="flex md:order-2 gap-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {showLogin ? (
              <Link to={'/login'}>
                <button
                  type="button"
                  className="text-white bg-slate-700 hover:bg-slate-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </Link>
            ) : (
              ''
            )}
            {showSignup ? (
              <Link to={'/register'}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-300  hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  SignUp
                </button>
              </Link>
            ) : (
              ''
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <p className="text-[2rem] font-bold">Password Reset App</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
