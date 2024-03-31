import React from 'react'
import './RegisterForm-Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/* React Bootstrap */
import { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Import the Button component from React Bootstrap
import Col from 'react-bootstrap/Col'; // Import the Col component from React Bootstrap
import Form from 'react-bootstrap/Form'; // Import the Form component from React Bootstrap
import InputGroup from 'react-bootstrap/InputGroup'; // Import the InputGroup component from React Bootstrap
import Row from 'react-bootstrap/Row'; // Import the Row component from React Bootstrap

function RegisterForm() {
  // Declare a state variable to manage the form validation state
  const [validated, setValidated] = useState(false);

  // Declare a state variable to hold the form values
  const [firstname, setFirstName] = useState("N/A");

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    // Get the form element
    const form = event.currentTarget;

    // Check if the form is valid
    if (form.checkValidity() === false) {
      // Prevent the form from submitting
      event.preventDefault();
      // Stop the form from bubbling up the event
      event.stopPropagation();
    }

    // Set the validation state to true
    setValidated(true);

  };


  return (
  <div className="form"> 

    <div className="form-container"> 
      <h1 id="header">Register</h1> 
      <Form noValidate validated={validated} onSubmit={handleSubmit}> 

        <Row className="mb-3" id="row"> 
          <Form.Group as={Col} md="4" controlId="validationCustom01"> 
            <Form.Label>First name</Form.Label> 
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid"> 
              Please enter your First Name.
            </Form.Control.Feedback>
          </Form.Group>
         </Row>

        <div id="button-submit"> 
          <Form.Group className="mb-4 d-flex justify-content-center"> 
            <Button type="submit" id="button-submit" onClick={ handleSubmit }>SUBMIT</Button> 
          </Form.Group>
          <h1>{ firstname }</h1>
        </div>
      </Form>
    </div>
  </div>
);
  }

export default RegisterForm;