import Form from 'react-bootstrap/Form';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from 'react-bootstrap';


export function ForgotPassword(){
 return(
    <>
    <div>
    <h1 className='h1-fpp'>Forgot Password Page</h1>
    <p className='p-fpp'>Enter the email address associated with your account,<br>
    </br>
        and we&apos;ll send a link to reset your password.
    </p>
    <Form onSubmit={(e) => {e.preventDefault()
      console.log('sent email')}}>
    <Form.Group  className="fp-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className='p-text'>
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button type='submit' className='forgot-pw-submit'>Submit</Button>
    </Form>
    </div>

    </>
 )
}