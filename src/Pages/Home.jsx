import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ShowContext from '../Context/ShowContext'

const Home = () => {
  const { showLogin, showSignup, setShowLogin, setShowSignup } =
    useContext(ShowContext)

  useEffect(() => {
    setShowLogin(true)
    setShowSignup(true)
  }, [])

  return (
    <>
      <Navbar showSignup={showSignup} showLogin={showLogin} />
      <div className="">
        <img
          className="h-[50rem] w-[50rem] mt-[-150px] rounded-l-lg"
          src="https://www.svgrepo.com/show/294174/form.svg"
          alt="Landing Page Image"
        />
      </div>
    </>
  )
}

export default Home
