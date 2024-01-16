import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const VendorCards = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  // Handling loading state
  if (loading) return <Typography>Loading vendors...</Typography>;

  // Handling error state
  if (error) return <Typography>Error loading vendors: {error.message}</Typography>;

  // Sort users alphabetically by username
  const users = data?.allUsers?.slice().sort((a, b) => a.username.localeCompare(b.username)) || [];


  // Rendering the vendor cards
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center">
        {users.map(user => (
          // Entire Card Background
          <Card key={user._id} className="m-4 p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-400/50 w-fit">
            <CardHeader
            className='text-center shadow-xl mt-1 bg-transparent'>
              <Typography 
              variant="h3"
              color="cyan"
              className='mb-10'
              >
                {user.username}
              </Typography>
            </CardHeader>
            {/* Events and Demos Count */}
            <CardBody className="bg-gray-400/35 rounded-lg">
              <Typography className="mt-2 font-semibold text-md text-gray-300">
                Events: {user.savedEvents.length}
              </Typography>
              <Typography className="mt-2 font-semibold text-md text-gray-300">
                Demos: {user.savedDemos.length}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VendorCards;