import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { AddEntryPage } from './components/AddEntryPage'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <nav className='nav-home'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddEntryPage"> Add Entry Page</Link>
        </li>
      </ul>
    </nav>
  <Routes>
    <Route path='/' element ={ <Login />} />
    <Route path='/AddEntryPage' element ={ <AddEntryPage />} />
    <Route path='/Navbar' element ={ <Navbar />} />
  </Routes>
    </>
  )
}

export default App
