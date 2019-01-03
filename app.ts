import { ApolloServer } from "apollo-server-express";
import express from "express";

import context from "./context";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schemas";
import mongodb from "./mongodb";

const PORT = 4000;

const app = express();
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  tracing: true
});
app.use(express.json());

graphqlServer.applyMiddleware({ app });

mongodb.then(() => {
  app.listen({ port: PORT }, () =>
    // tslint:disable-next-line:no-console
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    )
  );
});
