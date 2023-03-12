const Anime = require("../models/Anime");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType
} = require("graphql");


// anime type
const CharacterType = new GraphQLObjectType({
    name: "Character",
    fields: () => ({
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      gender: { type: GraphQLString },
    }),
  });
  
  const CharacterInputType = new GraphQLInputObjectType({
    name: "CharacterInput",
    fields: () => ({
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      gender: { type: GraphQLString },
    }),
  });
  
  const AnimeType = new GraphQLObjectType({
    name: "Animes",
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      studio: { type: GraphQLString },
      episodes: { type: GraphQLInt },
      genres: { type: new GraphQLList(GraphQLString) },
      characters: { type: new GraphQLList(CharacterType) },
    }),
  });
  
  // user type
  const AdressType = new GraphQLObjectType({
    name: "Address",
    fields: () => ({
      street: { type: GraphQLString },
      city: { type: GraphQLString },
      state: { type: GraphQLString },
      zip: { type: GraphQLString },
    }),
  });
  
  const UserType = new GraphQLObjectType({
    name: "Users",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      email: { type: GraphQLString },
      address: { type: AdressType },
      anime: {
        type: AnimeType,
        async resolve(parent, args) {
          return await Anime.findById(parent.id);
        },
      },
    }),
  });

  module.exports = { CharacterType, UserType, AnimeType, AdressType, CharacterInputType }