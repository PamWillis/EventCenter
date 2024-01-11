import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';  // Assuming this is your GraphQL query

const Vendors = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error('Error fetching vendors:', error);
    return <p>Error: {error.message}</p>;
  }

  const users = data?.users || [];

  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <h1>Vendors</h1>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
          {/* Add more user info */}
        </div>
      ))}
    </div>
  );
};

export default Vendors;