const typeDefs = `#graphql
  type Event {
    _id: ID!
    title: String
    date: String
    time: String
    description: String
    image: String
    # Add a queryable field to retrieve an array of User objects
    users: [User]
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    # Add a queryable field to retrieve a single Demo object
    demos: [Demo]
  }

  type Demo {
    _id: ID!
    demotitle: String
    date: String
    time: String
  }

  type Query {
    me: User!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEvent(event: EventInput!): Event
    removeEvent(eventId: Int!): Event
    addDemo(demo: DemoInput!): User
    removeDemo(demoId: Int!): User
  }
`;

module.exports = typeDefs;
