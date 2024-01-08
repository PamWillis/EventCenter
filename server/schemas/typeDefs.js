const typeDefs = `#graphql

scalar Date

  type User {
  _id: ID!
  username: String
  email: String!
  password: String!
  isAdmin: Boolean
  savedDemos: [Demo]  # Many demos associated with a user
  savedEvents: [Event]  # Many events associated with a user
}
type UserType {
  _id: ID
  username: String
  # Add other fields as needed
}
type Event {
    _id: ID!
  title: String
  date: Date
  time: String
  description: String
  image: String
  users: [User]
  demos: [Demo]
  user: User  # Reference to the user who owns the event
}
input EventInput {
  title: String!
  date: Date!
  time: String!
  description: String!
  image: String!
}
type Demo {
  _id: ID!
  demotitle: String
  date: Date
  time: String
  user: User  # Reference to the user who owns the demo
}

input DemoInput {
  demotitle: String!
  date: Date!
  time: String!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User!
  eventsFromAllUsers: [Event]
  demosFromAllUsers: [Demo]
  usersFromEvent: [User]
}

type Mutation {
login(email: String!, password: String!): Auth
addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): Auth
saveEvent(event: EventInput!): User
removeEvent(eventId: ID!): User  
saveDemo(demo: DemoInput): User
removeDemo(demoId: ID!): User   
}
`;

module.exports = typeDefs;
