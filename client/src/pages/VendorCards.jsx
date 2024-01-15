import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import '../../EventCard.css';

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
      <div className="flex flex-wrap">
        {users.map(user => (
          <Card key={user._id} color="lightBlue" shadow="lg" className="mb-4 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <CardHeader color="blueGray">
              <Typography
                variant="h3" color="cyan">
                {user.username}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography className="mt-2">
                Events: {user.savedEvents.length}
              </Typography>
              <Typography className="mt-2">
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