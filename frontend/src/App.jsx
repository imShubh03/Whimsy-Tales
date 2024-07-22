import React from 'react'
import Home from './Home/Home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Books from './Books/Books.jsx'
import Contacts from './Contacts/Contacts.jsx'
import Signup from './components/Signup.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'



function App() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={authUser ? <Books /> : <Navigate to="/signup" />} />
        <Route path='/contacts' element={<Contacts />} />
        {/* signup */}
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
