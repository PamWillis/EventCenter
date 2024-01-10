import AuthService from '../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SignupForm from './SignupForm';


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
      <h1 className=' m-5 text-center font-semibold rounded'>Login to Your Profile!</h1>

      {/* Email submit form */}

      <form className='text-center m-10 bg-gray-400 p-5 rounded-lg shadow-xl' onSubmit={handleFormSubmit}>
        <div className='m-3'>
          <label htmlFor='email' className='m-5 text-lg font-bold'>Email:</label>
          <input
            type='text'
            placeholder=' Your email'
            name='email'
            onChange={handleInputChange}
            value={formState.email}
            required
          />
        </div>
      {/* </form> */}

      {/* Password submit form */}

      {/* <form className='m-5 text-center'> */}
        <label htmlFor='password' className='m-5 text-lg font-bold'>Password:</label>
        <input
          type='password'
          placeholder=' Your password'
          name='password'
          onChange={handleInputChange}
          value={formState.password}
          required
        />
        <div type='invalid'></div>
      {/* </form> */}

      {/* Submit button */}
      <div className='flex justify-center'>
        <button
          disabled={!(formState.email && formState.password)}
          type='submit'
          variant='success'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5'>
          Login
        </button>
      </div>
      </form>

      {/* ERROR */}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}

      <h1 className='mt-10 text-center font-semibold'>Join Our Network of Vendors!</h1>

      {/* Rendered Signup Form from 'pages/SignUpForm' */}
      <SignupForm />

    </>
  );
};


export default LoginForm;
