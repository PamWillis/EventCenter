import { gql } from "@apollo/client";

// Query to fetch events
export const GET_EVENTS = gql`
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
