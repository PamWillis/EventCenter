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
type Event {
    _id: ID!
  title: String
  date: Date
  time: String
  description: String
  image: String
  users: [User]
}
input EventInput {
  eventId: String!
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
  demoId: String!
  demotitle: String!
  date: Date!
  time: String!
}

type Auth {
  token: String
  user: User
}

type Query {
  demos: [Demo]
  demo(id: ID!): Demo
  events: [Event]
  event(id: ID!): Event
  users: [User]
  me: User!
}

type Mutation {
login(email: String!, password: String!): Auth
addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): Auth
addEvent(event: EventInput): User
removeEvent(eventId: ID!): User  
addDemo(demo: DemoInput): User
removeDemo(demoId: ID!): User   
}
`;

module.exports = typeDefs;
