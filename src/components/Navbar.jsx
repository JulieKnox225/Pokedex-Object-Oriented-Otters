import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'

export const Navbar = () => {
  return (
    <div>
      <div className="container">
        <label htmlFor="label-check">=</label>
      </div>
      <nav className='nav-home'>
        <a href="/" className="home-button">
        <h2>PokeDex</h2>
        </a>
        <h3><Link to="/"> Login</Link></h3>
        </nav>
    </div>
  )
}
