import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
//Add a greeting to the user after login?

export const Login = () => {
  const navigate = useNavigate();

  const navigateToNewUser = () =>{
    navigate('/AddEntryPage');
  }

  const navigateForgotPassword =()=>{
    navigate('/')
  }
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  const handleClick = (user) => {
    e.preventDefault();
    console.log('Hello, ' + user);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email)
  }

  return (
    
    <Form onSubmit={handleSubmit} className='login--container'>
      <div >
      <div className='logo'>
        <a href='/'><img className='pokemon--logo' src="images/logo3.png" alt="Pokemon in it's Iconic Design" /></a>
      </div>
      <Form.Group  className="form-basic-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value = {email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="form-basic-password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value = {pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
      
      <Button onClick={(e)=>handleClick()} className = "btn-el"variant="primary" type="submit">
        Login
      </Button>
      <Button className = "btn-el"variant="danger" type="submit">
        Forgot Password
      </Button>
      <Button onClick={navigateToNewUser} className = "btn-el"variant="secondary" type="submit">
       New User
      </Button>
      <Routes>
        <Route path='./components/AddEntryPage'></Route>
        <Route></Route>
      </Routes>
      </div>
    </Form>
  );
}




