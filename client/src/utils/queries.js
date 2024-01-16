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

// Query to fetch vendors
export const GET_ALL_USERS = gql`
  query AllUsers {
    allUsers {
      _id
      username
      email
      savedEvents {
        _id
        title
        date
        time
        description
        image
      }
      savedDemos {
        _id
        demotitle
        date
        time
      }
    }
  }
`;

export const GET_EVENT_DETAILS = gql`
  query EventDetails($eventId: ID!) {
    eventDetails(eventId: $eventId) {
      _id
      title
      date
      time
      description
      image
    }
  }
`;