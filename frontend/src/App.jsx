import React from 'react'
import Home from './Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Books from './Books/Books.jsx'
import Contacts from './Contacts/Contacts.jsx'
import Signup from './components/Signup.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/contacts' element={<Contacts />} />
        {/* signup */}
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </>
  )
}

export default App
