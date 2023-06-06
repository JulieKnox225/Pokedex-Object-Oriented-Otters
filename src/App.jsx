// import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddEntryPage } from './components/AddEntryPage'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { SearchPage } from './components/SearchPage'
import { Footer } from './components/Footer'
// import { useState } from 'react'


function App() {

  return (
    <>
  <Navbar />
  <Routes>
    <Route path='/' element ={ <Login />} />
    <Route path='/AddEntryPage' element ={ <AddEntryPage />} />
    <Route path='/SearchPage' element= { <SearchPage /> } />
  </Routes>
  <Footer />
    </>
  )
}

export default App
