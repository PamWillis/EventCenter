const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Event {
    _id: ID!
  title: String
  date: Date
  time: String
  description: String
  image: String
  # Change to an array of User objects to represent many users
  users: [User]
}

type User {
  _id: ID!
  username: String
  email: String
  # Consider removing password field for security reasons
  demos: [Demo]  # Many demos associated with a user
  events: [Event]  # Many events associated with a user
  isAdmin: Boolean
}

type Demo {
  _id: ID!
  demotitle: String
  date: Date
  time: String
  user: User  # Reference to the user who owns the demo
}

type Auth {
  token: String
  user: User
}

type Query {
  demos: [Demo]
  events: [Event]
  users: [User]
  user(username: String!): User
  me: User
}

type Mutation {
  login(
    email: String!
    password: String!
    ): Auth

  addUser(
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean
    ): Auth

  addEvent(
    title: String!
    date: Date!
    time: String!
    description: String!
    image: String!
    ): Event

  addDemo(
    demotitle: String!
    date: Date!
    time: String!
    ): Demo
  removeDemo(
    demoId: ID!
    ): Demo   
  # ... other mutations
}
`;

module.exports = typeDefs;
