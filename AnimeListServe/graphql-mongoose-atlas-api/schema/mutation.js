const Anime = require("../models/Anime");
const { AnimeType, CharacterInputType } = require("../schema/types");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const mutation = () => new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAnime: {
      type: AnimeType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        studio: { type: GraphQLString },
        episodes: { type: GraphQLInt },
        genres: { type: new GraphQLList(GraphQLString) },
        characters: { type: new GraphQLList(CharacterInputType) },
      },
      async resolve(parent, args) {
        const anime = new Anime({
          title: args.title,
          studio: args.studio,
          episodes: args.episodes,
          genres: args.genres,
          characters: args.characters,
        });

        return await anime.save();
      },
    },

    updateAnime: {
      type: AnimeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        studio: { type: GraphQLString },
        episodes: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        return await Anime.findByIdAndUpdate(args.id, {
          $set: {
            studio: args.studio,
            episodes: args.episodes,
          },
        });
      },
    },

    deleteAnime: {
      type: AnimeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Anime.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports =  mutation 

