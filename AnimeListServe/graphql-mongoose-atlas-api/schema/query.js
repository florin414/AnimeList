const User = require("../models/User");
const Anime = require("../models/Anime");
const { UserType, AnimeType } = require("../schema/types");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
} = require("graphql");

const RootQuery = () => new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        return await User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await User.findById(args.is);
      },
    },
    animes: {
      type: new GraphQLList(AnimeType),
      async resolve(parent, args) {
        return await Anime.find();
      },
    },
    anime: {
      type: AnimeType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await Anime.findById(args.id);
      },
    },
  },
});

module.exports = RootQuery 
