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

//1
  const [firstname, setFirstName] = useState("");
    const firstNameSetter = (e) => {
      setFirstName(e.target.value);
      console.log(e.target.value);
    }

//2
const [lastname, setLastName] = useState("");
  const lastNameSetter = (e) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  }

//3
const [username, setUsername] = useState("");
  const usernameSetter = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  }

//4
const [email, setemail] = useState("");
  const emailSetter = (e) => {
    setemail(e.target.value);
    console.log(e.target.value);
  }  

//5
const [password, setpassword] = useState("");
  const passwordSetter = (e) => {
    setpassword(e.target.value);
    console.log(e.target.value);
  }   

//6
const [phonenumber, setphonenumber] = useState("");
  const phonenumberSetter = (e) => {
    setphonenumber(e.target.value);
    console.log(e.target.value);
  } 

//7
const [bio, setbio] = useState("");
  const bioSetter = (e) => {
    setbio(e.target.value);
    console.log(e.target.value);
  }  


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
              onChange={ firstNameSetter }
            />
            <Form.Control.Feedback type="invalid"> 
              Please enter your First Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02"> 
            <Form.Label>Last name</Form.Label> 
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={ lastNameSetter }
            />
            <Form.Control.Feedback type="invalid"> 
              Please enter your Last Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3" id="row"> 
          <Form.Group as={Col} md="8" controlId="validationCustomUsername"> 
            <Form.Label></Form.Label> 
            <InputGroup hasValidation> 
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> 
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                value={username}
                onChange={ usernameSetter }
                required
              /> 
              <Form.Control.Feedback type="invalid"> 
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3" id="row"> 
          <Form.Group as={Col} md="8" controlId="validationCustom03"> 
            <Form.Label>Email</Form.Label> 
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={ emailSetter }
            /> 
            <Form.Control.Feedback type="invalid"> 
              Please your Email Address.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3" id="row">
          <Form.Group as={Col} md="8" controlId="validationCustom04"> 
            <Form.Label>Password</Form.Label> 
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={ passwordSetter }
            />
            <Form.Control.Feedback type="invalid"> 
              Please enter a Password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3" id="row"> 
          <Form.Group as={Col} md="8" controlId="validationCustom04">
            <Form.Label>Phone Number</Form.Label> 
            <Form.Control
              required
              type="tel"
              placeholder="+27 XX XXX XXXX"
              maxLength="10"
              value={phonenumber}
              onChange={ phonenumberSetter }
            /> 
            <Form.Control.Feedback type="invalid">
              Please enter a Password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3" id="row"> 
          <Form.Group as={Col} md="8" controlId="validationCustom03"> 
            <Form.Label>Short Bio</Form.Label> 
            <Form.Control as="textarea" rows={3}
              required
              placeholder="Share a little information about yourself"
              value={bio}
              onChange={ bioSetter }
            /> 
            <Form.Control.Feedback type="invalid"> 
              Please your Email Address.
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