import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from 'assets/images/logo.png'
import './index.scss';



const LoginForm:React.FC<FormProps>=({setEmail,setPassword,setRememberUser,rememberUser,onSubmit})=> {
return (
    <div className='form-container' >
      <h5 className='salutation-msg'>Welcome back!</h5>
      <img src={logo} width={50} alt="Horse Meter" />
      <p>Signin to Horse Meter</p>
      <Form onSubmit={onSubmit} style={{width:'100%'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control data-testid="email-input-element" type="email" placeholder="Enter email" name="email" required  onChange={(e)=>{setEmail(e.target.value)}}   />
         <Form.Text className="text-muted">
          We'll never share your email with anyone else.
         </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control data-testid="password-input-element" type="password" placeholder="Password" name="password" required  onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Remember me"  onChange={(e)=>{setRememberUser(!rememberUser)}}  />
        </Form.Group>

        <Button data-testid="login-button-element" variant="primary" type="submit" className='submit-btn'>
         Login
        </Button>
      </Form>
    </div>
    
  );
}

export default LoginForm;