const typeDefs = `
  type Event {
    _id: ID!
    title: String
    date: Int
    time: Int
    description: String
    image: String
    # Add a queryable field to retrieve an array of Class objects
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
    date: Int
    time: Int
    # Add a queryable field to retrieve a single User object
    user: User
  }

  type Query {
    events: [Event]
    users: [User]
    demos: [Demo]
  }
`;

module.exports = typeDefs;
