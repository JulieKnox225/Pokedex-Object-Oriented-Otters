import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const  Login = ()=> {
  return (
    <Form>
      <div className='logo'>
        <a href='/'><img  src="images/logo3.png" alt="Pokemon in it's Iconic Design" /></a>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button className = "btn-el"variant="primary" type="submit">
        Login
      </Button>
      <Button className = "btn-el"variant="danger" type="submit">
        Forgot Password
      </Button>
      <Button className = "btn-el"variant="secondary" type="submit">
       New User
      </Button>
    </Form>
  );
}



// export default(LoginPage)
