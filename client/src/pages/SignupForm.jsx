import AuthService from '../utils/auth';
import React, { useState } from 'react';
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
      <Card color="white" className="flex justify-center items-center p-10">
        <div className="rounded-lg shadow-2xl p-4">
        <Typography variant="h4" color="blue-gray" className="font-Bree text-green-500">
          Sign Up
        </Typography>
        <Typography className='m-5 text-lg font-bold text-center mb-10' htmlFor='username'>
          Nice to meet you! Enter your details to register.
        </Typography>

            />
          </div>
          <Button
            className="mt-6 bg-green-600 text-white"
            fullWidth
            disabled={!(formState.username && formState.email && formState.password)}
            type='submit'
            onClick={handleFormSubmit}
            variant='gradient'
          >
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?&nbsp;&nbsp;
            <a href="/login" className="font-bold text-cyan-500 underline">
              Log In
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

export default SignupForm;