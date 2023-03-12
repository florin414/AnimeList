const { GraphQLSchema } = require("graphql");

const Mutation = require('./mutation');
const RootQuery = require('./query');

const mutation = Mutation();
const rootQuery = RootQuery();

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation,
});
