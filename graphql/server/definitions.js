exports.types = `
  type Query {
    info: String!
    feed: [Link]!
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
    post(url: String!, description: String!): Link!
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

const defaultLinks = [{
  id: 'link-0',
  description: 'Full stack tutorial for GraphQL',
  url: 'https://www.howtographql.com',
}];

exports.resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => defaultLinks,
  },
  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (url) => root.url,
  }
}