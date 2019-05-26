import express from "express";
import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import schema from "./schema";
import resolvers from "./resolvers";
// import mocks from '../mocks';

import TranslateAPI from "./datasources/TranslateAPI";

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  // mocks,
  dataSources: () => {
    return {
      translateAPI: new TranslateAPI()
    };
  },
  playground: {
    settings: {
      "editor.cursorShape": "line",
      "editor.theme": "light",
      "request.credentials": "include",
      "tracing.hideTracingResponse": false
    }
  }
});

server.applyMiddleware({ app, path: "/" });

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
