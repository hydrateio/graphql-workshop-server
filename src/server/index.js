import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import schema from '../schema';
import resolvers from '../resolvers';
// import mocks from '../mocks';

import TranslateAPI from '../datasources/TranslateAPI';

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    readJson: (entity) => {
      const jsonPath = path.join(__dirname, '..', 'data', `${entity}.json`);
      const json = fs.readFileSync(jsonPath);
      return JSON.parse(json);
    },
    writeJson: (entity, data) => {
      const jsonPath = path.join(__dirname, '..', 'data', `${entity}.json`);
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    },
    readJsonAsync: (entity) => {
      return new Promise((resolve, reject) => {
        const jsonPath = path.join(__dirname, '..', 'data', `${entity}.json`);
        fs.readFile(jsonPath, (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(JSON.parse(data));
        });
      });
    },
  },
  // mocks,
  dataSources: () => {
    return {
      translateAPI: new TranslateAPI(),
    };
  },
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'light',
      'request.credentials': 'include',
      'tracing.hideTracingResponse': false,
    },
  },
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
