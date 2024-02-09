import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { errorToast, successToast } from "../../services/toast.service";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const data = { fullName, email, password };

    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        data
      );
      if (resp.data.status) {
        navigate("/");
        successToast(resp.data.message);
      }
    } catch (err) {
      errorToast(err.response.data.message);
    }
  };

  const handleClickLogin=()=>{
    navigate("/")
  }
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="forFullName">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter fullname"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
          Signup
        </Button>
        <Button variant="link" onClick={handleClickLogin}>
          Already signed up? click here.
        </Button>
      </Form>
    </Card>
  );
};

export default SignUpPage;
