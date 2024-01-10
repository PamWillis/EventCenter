import AuthService from '../utils/auth';
import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const { data } = await addUser({
          variables: { ...formState }
        });

        // Log the data to the console to inspect its structure
        console.log('Data from server:', data);

        // Assuming your server response has a structure like { addUser: { token: 'your_token', user: { _id, username } } }
        const { token, user } = data.addUser;

        // Store the token in your authentication system (e.g., localStorage, cookies, etc.)
        // This depends on how you've implemented your Auth system
        AuthService.login(token);

        // Clear form values
        setFormState({
          username: user.username,
          email: formState.email,
          password: formState.password,
        });

        // Redirect to the login page upon successful signup
        navigate.push('/login');

        // Logout to clear the token from client storage
        AuthService.logout();
      } catch (error) {
        console.error(error);

        // Handle the error (show an error message, etc.)
        setShowAlert(`Error: ${error.message}`);
      }
      console.log('After signup code');
    }

    setValidated(true);
  };

  return (
    <>
      {/* <form noValidate validated={validated} onSubmit={handleFormSubmit}> */}
        {/* show alert if server response is bad */}
        {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert> */}

{/* Username Form */}

        <form className='text-center m-10 bg-gray-400 p-5 rounded-lg shadow-xl'>
          <label className='m-5 text-lg font-bold' htmlFor='username'>Username:</label>
          <input
            type='text'
            placeholder=' Your username'
            name='username'
            onChange={handleInputChange}
            value={formState.username}
            required
          />
        {/* </form> */}

{/* Email Form */}

        {/* <form className='m-10 text-center'> */}
        <div className='m-3'>
          <label htmlFor='email' className='m-5 text-lg font-bold'>Email:</label>
          <input
            type='email'
            placeholder=' Your email address'
            name='email'
            onChange={handleInputChange}
            value={formState.email}
            required
          />
          </div>
        {/* </form> */}

        {/* Password Form */}

        {/* <form className='m-5 text-center'> */}
        <div className='m-3'>
          <label className='m-5 text-lg font-bold' htmlFor='password'>Password:</label>
          <input
            type='password'
            placeholder=' Your password'
            name='password'
            onChange={handleInputChange}
            value={formState.password}
            required
          />
          </div>

{/* Submit Button */}

<div className='flex justify-center'>
        <button
          disabled={!(formState.username && formState.email && formState.password)}
          type='submit'
          variant='success'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5'
        >
          Submit
        </button>
        </div>
        </form>

      {/* </form> */}

      {/* ERROR */}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )};

      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              value={formState.username}
              onChange={handleInputChange}
              name="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
              minLength="3"
              pattern="[A-Za-z]+"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your email"
              value={formState.email}
              onChange={handleInputChange}
              name="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
              pattern="/^[\w-]+(\.[\w-]+)*@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password (Minimum 8 characters)
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              value={formState.password}
              onChange={handleInputChange}
              name="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
              minLength="8"

            />
          </div>
          <Button
            className="mt-6"
            fullWidth
            disabled={!(formState.username && formState.email && formState.password)}
            type='submit'
            onClick={handleFormSubmit}
            variant='gradient'
          >
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-gray-900">
              Log In
            </a>
          </Typography>
        </form>
      </Card>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default SignupForm;