import { gql, useQuery } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const GET_ALL_EVENTS = gql`
  query EventsFromAllUsers {
    eventsFromAllUsers {
      _id
      title
      date
      time
      description
      image
    }
  }
`;

export const useGetAllEvents = () => {
  return useQuery(GET_ALL_EVENTS);
};