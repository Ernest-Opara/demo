import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import './Login.css'



function FormExample() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
      <Card>
      <Card.Body>
        <Card.Text>

          <h7 className="header-text">Welcome</h7>
          <h5 className="hero-text">Login to your account</h5>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
       
        <Form.Group className="form-email" controlId="form.email">
          <h7 className="email textbox-email">Email</h7>
            <Form.Control className="textbox-email" type="email" size="lg" placeholder="bill.sanders@example.com" />
        </Form.Group>
        <Form.Group controlId="form.password">
            <Form.Control type="password" size="lg" placeholder="**********" />
            <h7 className="password">Password</h7>
        </Form.Group>
        
      </Form>

      <Button className="button" type="submit">Login</Button>

      <h6 className="forgot-password">Forgot Password?</h6>

      <h6 className="signup">I don't have an account?<a className="linktag" href="https://ukraine.com">Sign up</a></h6>

        </Card.Text>
      </Card.Body>
    </Card>

  
    );
  }
  
  


export default FormExample