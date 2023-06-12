
import Dropdown from 'react-bootstrap/Dropdown'


export const Navbar = () => {
  return (
    <div>
      <nav className='nav-home'>

      <Dropdown>
        <Dropdown.Toggle variant='secondary' id="dropdown-button-dark-example1">
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/SearchPage">Search Page</Dropdown.Item>
          <Dropdown.Item href="/AddEntryPage">Add Entry</Dropdown.Item>
          <Dropdown.Item href="/SPPoke">PokeDex</Dropdown.Item>
          <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/EditProfile">Edit Profile</Dropdown.Item>
          <Dropdown.Item href="/Register">Create Profile</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
        <a href="/" className="home-button">
        <h2 className="home-button-text">PokeDex</h2>
        </a>
        <a href='/Login'>
        <p className="login--text">Login</p>
        </a>
        </nav>
    </div>
  )
}
