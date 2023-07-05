import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setToken}) {
  const [ user, setUser ] = useState('')

  return (
    <Form style={{ width: "150px", height: "150px", margin: "20%", backgroundColor: "gray", padding: "10px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control type="username" onChange={(e) => setUser(e.target.value)} placeholder="Enter name" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => {
            localStorage.users[0].name = user 
            useNavigate(<Meals user={user} />)
        }}>
        Submit
      </Button>
    </Form>
  )
}

export default Login
