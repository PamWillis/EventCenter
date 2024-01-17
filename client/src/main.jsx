import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Home from './pages/home'
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import Vendors from './pages/Vendors'
import EventCreateForm from './pages/EventCreateForm'
import FacilityTour from './pages/FacilityTour';
import EventDetails from './pages/EventDetails'; 


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
      }, {
        path: '/AboutUs',
        element: <AboutUs />
      },
      {
        path: '/Events',
        element: <Events />,
        children: [
          {
            path: ':eventId',
            element: <EventDetails />,
          },
        ],
      },
      {
        path: '/Vendors',
        element: <Vendors />
      },
      {
        path: '/EventCreateForm',
        element: <EventCreateForm />
      },
      {
        path: '/FacilityTour',
        element: <FacilityTour />
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
