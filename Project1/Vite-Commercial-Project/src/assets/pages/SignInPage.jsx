import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
import { errorToast, successToast } from "../../services/toast.service";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //navigate
  const navigate=useNavigate();

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }

    // console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, password };
    // console.log(data)
    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((resp) => {
        if (resp.data.status) {

          //navigate
          localStorage.setItem("isLoggedIn", "true");
          navigate("/products");
          successToast(resp.data.message)
            
        }
        // console.log(resp);
      })
      .catch((err) => {
        // console.log("err",err.response.data.message);

        errorToast(err.response.data.message)
        // toast.error(err.response.data.message, {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      });
  }

  const handleClickSignup=()=>{
    navigate("/signup")
  }
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="login" onClick={handleSubmit}>
          Login
        </Button>
        <Button variant="link" onClick={handleClickSignup}>
          Not signed up? click here.
        </Button>
      </Form>
    </Card>
  );
};

export default SignInPage;
