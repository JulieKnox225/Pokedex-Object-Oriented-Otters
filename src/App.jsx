// import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddEntryPage } from './components/AddEntryPage'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { SearchPage } from './components/SearchPage'
import { Footer } from './components/Footer'
import { ForgotPassword } from './components/ForgotPassword'
import { SearchPagePokemon } from './components/SearchPagePokemon'
import { Home } from './components/Home'
import { Register } from './components/Register'
// import { useState, useEffect } from 'react'
// import './darkMode.css';
function App() {
  // const [theme, setTheme] = useState('light')
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme ('dark');
  //   } else{
  //     setTheme('light');
  //   }
  // }
  // useEffect(()=> {
  //   document.body.className = theme;
  // }, [theme]);

  return (
    <>
    <div className='site--container'>
      <Navbar />
      {/* <div className={`App ${theme}`}>
      <button className = "light-dark-btn"onClick={toggleTheme}>Toggle Theme</button> */}
      <Routes>
        <Route path='/' element ={ <Home />} />
        <Route path='/Login' element={ <Login/> } />
        <Route path='/AddEntryPage' element ={ <AddEntryPage />} />
        <Route path='/SearchPage' element= { <SearchPage /> } />
        <Route path ='/ForgotPassword' element = {<ForgotPassword/>}/>
        <Route path='/SPPoke' element= {< SearchPagePokemon/> } />
        <Route path='/Register' element= {< Register/> } />
      
      </Routes>
    </div>
    <Footer />
    {/* </div> */}
    </>
  )
}

export default App
