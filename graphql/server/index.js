const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./definitions');
const { Prisma } = require('prisma-binding');

const server = new GraphQLServer({
  typeDefs: 'server/schema.graphql',
  resolvers: resolvers,
  context: req => ({
    ...req,
    // db: new Prisma({
    //   typeDefs: 'database/generated/prisma.graphql',
    //   endpoint: 'https://eu1.prisma.sh/public-graytracker-771/hackernews-node/dev',
    //   secret: 'secret-SALT-1234',
    //   debug: true,
    // }),
  }),
});

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});