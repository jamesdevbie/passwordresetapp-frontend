import React from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ResetPassword from './Pages/ResetPassword'
import ForgotPassword from './Pages/ForgotPassword'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import ShowContextProvider from './Context/ShowContextProvider.jsx'

const App = () => {
  return (
    <div className="flex justify-center items-center mt-[25vh]">
      <div>
        <div>
          <ToastContainer />
        </div>
        <ShowContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/landingpage" element={<LandingPage />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route
                path="/reset-password/:randomstring"
                element={<ResetPassword />}
              />
            </Routes>
          </BrowserRouter>
        </ShowContextProvider>
      </div>
    </div>
  )
}

export default App
