import Form from 'react-bootstrap/Form';
import "@fortawesome/fontawesome-free/css/all.min.css";


export function ForgotPassword(){
 return(
    <>
    <div>
    <h1>Forgot Password Page</h1>
    <Form.Group  className="form-basic-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>
   
    </div>

    </>
 )
}