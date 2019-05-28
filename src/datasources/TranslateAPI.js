import { RESTDataSource } from "apollo-datasource-rest";

class TranslateAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.funtranslations.com/translate/";
  }

  willSendRequest(request) {
    // just a demo!
    let secret = "e8enNC_cQ257wS4qcdny_weF";
    if (request.path.startsWith("dothraki")) {
      secret = "U9JBEwzqjPvt54H8NoB0IweF";
    }
    request.headers.set("X-Funtranslations-Api-Secret", secret);
  }

  async translate(targetLanguage, text) {
    const translateResponse = await this.post(
      `${targetLanguage}.json`, // path
      { text } // request body
    );
    return translateResponse.contents;
  }
}

export default TranslateAPI;
