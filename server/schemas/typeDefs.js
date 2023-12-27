const typeDefs = `
  type Event {
    _id: ID
    name: String
    location: String
    studentCount: Int
    # Add a queryable field to retrieve an array of Class objects
    classes: [Class]
  }

  type User {
    _id: ID
    name: String
    building: String
    creditHours: Int
    # Add a queryable field to retrieve a single Professor object
    professor: Professor
  }

  type Demo {
    _id: ID
    name: String
    building: String
    creditHours: Int
    # Add a queryable field to retrieve a single Professor object
    professor: Professor
  }

  # Define what can be queried for each professor
  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
  }

  type Query {
    events: [School]
    ussers: [Class]
    demos: [Professor]
  }
`;

module.exports = typeDefs;
