import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VENDORS } from '../utils/queries';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

  const VendorCards = () => {
    const { loading, error, data } = useQuery(GET_VENDORS); 
  
    // Handling loading state
    if (loading) return <Typography>Loading events...</Typography>;

    // Handling error state
    if (error) return <Typography>Error loading events: {error.message}</Typography>;
  
    return (
      <div className="p-4">
        <div className="flex flex-wrap">
          {data && data.vendorsFromAllEvents.map(user => (
            <Card key={user._id} color="lightBlue" shadow="lg" className="mb-4 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <CardHeader color="blueGray">
                <Typography variant="h3" color="cyan">
                  {user.username} 
                </Typography>
              </CardHeader>
              {/* ... (Render other vendor details) */}
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default VendorCards;