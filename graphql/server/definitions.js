exports.types = `
  type Query {
    info: String!
  }
`;

exports.resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}