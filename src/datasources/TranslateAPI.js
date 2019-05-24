import { RESTDataSource } from 'apollo-datasource-rest';

class TranslateAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.funtranslations.com/translate/';
  }

  async translate(targetLanguage, text) {
    return this.post(
      `${targetLanguage}.json`, // path
      { text }, // request body
    ).contents;
  }
}

module.exports = TranslateAPI;
