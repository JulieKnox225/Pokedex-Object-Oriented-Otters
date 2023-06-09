import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {  Link } from 'react-router-dom';
//Add a greeting to the user after login?

export const Login = () => {

  return (
    <Form className='login--container' style={{marginTop: '45px'}}>
      <div>
      <div className='logo'>
        <a href='/'><img className='pokemon--logo' src="images/logo3.png" alt="Pokemon in it's Iconic Design" /></a>
      </div>
      <Form.Group  className="form-basic-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="login-text">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="form-basic-password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      
      <Button className = "btn-el"variant="primary" type="submit">
        Login
      </Button>
     <Link to = "/ForgotPassword">
      <Button className = "btn-el"variant="danger" type="submit">
        Forgot Password
      </Button>
     </Link>
      <Link to = "/Register">
      <Button className = "btn-el"variant="secondary" type="submit">
       New User
      </Button>
      </Link>
      </div>
    </Form>
  
  );
}




