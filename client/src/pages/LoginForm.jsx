import AuthService from '../utils/auth';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SignupForm from './SignupForm';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [validated, setValidated] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  // submit form

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      AuthService.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values

    setFormState({
      email: '',
      password: '',
    });

  };

  return (
    <>
      <Card>

        {/* Login Header */}

        <Typography className='text-2xl mt-10 text-center font-semibold'>
          Login
        </Typography>
        <Typography className="m-5 text-lg font-bold text-center mb-10'" htmlFor='username'>
          Enter to create events or sign up to be a vendor
        </Typography>

        {/* Login Form */}

        <div className="flex justify-center">
          <form className="text-center mb-10 bg-gray-400 p-5 rounded-lg shadow-2xl">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="Enter your Email"
                value={formState.email}
                onChange={handleInputChange}
                name="email"
                className="bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                value={formState.password}
                onChange={handleInputChange}
                name="password"
                className="bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button
              className="mt-6"
              fullWidth
              disabled={!(formState.username && formState.email && formState.password)}
              type='submit'
              onClick={handleFormSubmit}
              variant='gradient'
              color='blue'
            >
              Log in
            </Button>
            <Typography color="black" className="mt-4 text-center font-normal">
              Don't have an account yet?{" "}
              <a href="/signup" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </div>
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

export default LoginForm;
