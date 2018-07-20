const { GraphQLServer } = require('graphql-yoga');
const { types, resolvers } = require('./definitions');

const server = new GraphQLServer({
  typeDefs: types,
  resolvers: resolvers,
});

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});