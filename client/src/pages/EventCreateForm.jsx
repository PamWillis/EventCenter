import React from 'react';
import Widget from '../components/Widget';
import '../App.css';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { SAVE_EVENT } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';


import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const EventCreateForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    image: ''
  });

  const [validated, setValidated] = useState(false);
  const [saveEvents, { error, data }] = useMutation(SAVE_EVENT);
  const [imageState, setImageState] = useState('');

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };


  // submit form
  const handleEventSubmit = async (event) => {
    event.preventDefault();
    try {
      const newFormState = { ...formState, image: imageState };
      await saveEvents({
        variables: { event: newFormState },
      });

      // Reset form values to initial state
      setFormState({
        title: '',
        description: '',
        date: '',
        time: '',
        image: ''
      });
      setImageState('');

      // Redirect to the /Events page
      navigate('/Events');
    } catch (e) {
      console.error(e);
    }
  };



  const handleImageSelect = (image) => setImageState(image);

  return (
    <>
      <div style={{ backgroundImage: 'url(../src/assets/home/newEventHero.jpg)' }}>
        <Card color="transparent" shadow={false} className="flex justify-center items-center p-10">
          <div className="rounded-lg shadow-2xl p-4 bg-gray-300/50">
            <Typography variant="h4" color="cyan" className="font-Bree text-cyan-500">
              Create A New Event
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter information including a photo to represent your event.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6 p-5">

                {/* Title */}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Title
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter the name of your event"
                  value={formState.title || ''}
                  onChange={handleInputChange}
                  name="title"
                  className="bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  required
                />

                {/* Description */}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Description
                </Typography>
                <Input
                  size="lg"
                  placeholder="Description"
                  value={formState.description || ''}
                  onChange={handleInputChange}
                  name="description"
                  className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  required
                />

                {/* Date */}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Date
                </Typography>
                <Input
                  type="date"
                  size="lg"
                  placeholder="Example: 01/01/2025"
                  value={formState.date || ''}
                  onChange={handleInputChange}
                  name="date"
                  className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  required
                />

                {/* Time */}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Time
                </Typography>
                <Input
                  type="time"
                  size="lg"
                  placeholder="Example: 9am-5pm"
                  value={formState.time || ''}
                  onChange={handleInputChange}
                  name="time"
                  className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none"
                  }}
                  required
                />

                {/* Picture Upload Widget */}

                <Widget handleImageSelect={handleImageSelect}/>
              </div>

              {/* Create Event Button */}

              <Button
                className="mt-6 bg-cyan-500 text-white"
                fullWidth
                disabled={!(formState.title && formState.description && formState.date && formState.time && imageState)}
                type='submit'
                variant='gradient'
                onClick={handleEventSubmit}
              >
                CREATE EVENT
              </Button>
            </form>
          </div >
        </Card >
      </div>
    </>
  );
};


export default EventCreateForm;