exports.types = `
  type Query {
    info: String!
    feed: [Link]!
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }

  type User {
    id: ID!
    name: String!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

exports.resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}