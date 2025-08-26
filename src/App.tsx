import React from 'react'
import LandingPage from './frontend/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './frontend/SignIn'
import SignUp from './frontend/SignUp'
import LoggedIn from './frontend/components/LoggedIn'
import FoundAnimal from './frontend/FoundAnimal'
import RescueAnimal from './frontend/RescueAnimal'

const App = () => {
  return (
   <>
   <div>
   <BrowserRouter>
        <Routes>
          <Route path='/BE' element={<LandingPage />}/>
          <Route path='/BElogin' element={<SignIn />}/>
          <Route path='/BEsignup' element={<SignUp />}/> 
          <Route path='/BEloggedin' element={<LoggedIn />}/> 
          <Route path='/BErescued' element={<RescueAnimal />}/>
          <Route path='/BEfound' element={<FoundAnimal />}/>
        </Routes>
      </BrowserRouter>
   </div>
   </>
  )
}

export default App