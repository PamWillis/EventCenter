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
  // const [validated, setValidated] = useState(false);
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
    console.log("hello")
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
      <div className='bg-contain' style={{ backgroundImage: 'url(../src/assets/home/loginHero.jpg)' }}>
      <Card color="transparent" shadow={false} className="flex justify-center items-center p-10">
        <div className="rounded-lg shadow-2xl p-4 bg-gray-200/60">
        <Typography variant="h4" color="blue-gray" className="font-Bree text-green-500">
          Log In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter to create events or sign up to be a vendor
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              value={formState.email}
              onChange={handleInputChange}
              name="email"
              className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
        
            />
          </div>
          <Button
            className="mt-6 bg-cyan-500 text-white"
            fullWidth
            disabled={!(formState.email && formState.password)}
            type='submit'
            onClick={handleFormSubmit}
            variant='gradient'
            
          >
            Log in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account yet?&nbsp;&nbsp;
            <a href="/signup" className="font-bold text-green-500 underline">
              Sign Up
            </a>
          </Typography>
        </form>
        </div>
      </Card>
      </div>
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
