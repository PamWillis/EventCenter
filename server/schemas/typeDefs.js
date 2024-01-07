const typeDefs = `#graphql

scalar Date

  type User {
  _id: ID!
  username: String
  email: String!
  password: String!
  isAdmin: Boolean
  demos: [Demo]  # Many demos associated with a user
  events: [Event]  # Many events associated with a user
  event: Event
}
type Event {
    _id: ID!
  title: String
  date: Date
  time: String
  description: String
  image: String
  users: [User]
  user: User
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
addEvent(title: String, date: Date, time: String, description: String, image: String): Event
removeEvent(eventId: ID!): User  
addDemo(demo: DemoInput): Demo
removeDemo(demoId: ID!): User   
}
`;

module.exports = typeDefs;
