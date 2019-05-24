
module.exports = {
  Query: {
    episode: async (root, params, context) => {
      const data = context.readJson('got');
      const result = data._embedded.episodes.find(d => d.id === params.id);
      return result;
    },
    episodes: async (root, params, context) => {
      const data = context.readJson('got');
      const result = data._embedded.episodes.filter(d => d.name.toLowerCase().indexOf(params.name.toLowerCase()) !== -1);
      return result;
    },
    translate: async (_source, { targetLanguage, text }, { dataSources }) => {
      return dataSources.translateAPI.translate(targetLanguage, text);
    },
  },
};
