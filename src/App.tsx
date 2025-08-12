import React from 'react'
import LandingPage from './frontend/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './frontend/SignIn'
import SignUp from './frontend/SignUp'
const App = () => {
  return (
   <>
   <div>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/> 
        </Routes>
      </BrowserRouter>
   </div>
   </>
  )
}

export default App