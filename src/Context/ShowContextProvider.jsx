import React, { useState } from 'react'
import ShowContext from './ShowContext'

function ShowContextProvider({ children }) {
  const [showLogin, setShowLogin] = useState(true)
  const [showSignup, setShowSignup] = useState(true)
  return (
    <div>
      <ShowContext.Provider
        value={{ showLogin, setShowLogin, showSignup, setShowSignup }}
      >
        {children}
      </ShowContext.Provider>
    </div>
  )
}

export default ShowContextProvider
