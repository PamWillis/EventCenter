import { gql, useMutation } from '@apollo/client';

// Define mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_EVENT = gql`
mutation SaveEvent($event: EventInput!) {
  saveEvent(event: $event) {
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
  }
}
`;