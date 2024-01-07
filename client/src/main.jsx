import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import App from './App'
import ErrorPage from './pages/ErrorPage'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Home from '../src/pages/Home'
import AboutUs from '../src/pages/AboutUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <LoginForm />
      }, {
        path: '/signup',
        element: <SignupForm />
      }, 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
