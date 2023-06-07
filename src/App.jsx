// import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddEntryPage } from './components/AddEntryPage'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { SearchPage } from './components/SearchPage'
import { Footer } from './components/Footer'
import { ForgotPassword } from './components/ForgotPassword'
// import { useState } from 'react'


function App() {

  return (
    <>
    <div className='site--container'>
      <Navbar />
      <Routes>
        <Route path='/' element ={ <Login />} />
        <Route path='/AddEntryPage' element ={ <AddEntryPage />} />
        <Route path='/SearchPage' element= { <SearchPage /> } />
        <Route path ='/ForgotPassword' element = {<ForgotPassword/>}/>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
