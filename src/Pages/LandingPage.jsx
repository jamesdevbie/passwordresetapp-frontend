import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ShowContext from '../Context/ShowContext'

const LandingPage = () => {
  useEffect(() => {
    setShowLogin(false)
    setShowSignup(false)
  }, [])

  const { setShowLogin, setShowSignup } = useContext(ShowContext)
  return (
    <div>
      <Navbar />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuVhfXz0a0Wwml36QF87eOO2guvQ1JMIJrA&s"
        alt="user Logged In"
      />
    </div>
  )
}

export default LandingPage
