import {ApolloServer} from "apollo-server";

import typeDefs from "./typeDefs";
import {resolvers} from "./resolvers";
import {DatabaseResolverContextFunction, MockDatabase} from "./data";


console.log('Preparing to launch server');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (async (context) => ({
        data: new MockDatabase(),
        ...context,
    })) as DatabaseResolverContextFunction
});

server.listen({
    port: 4000,
}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
}).catch((reason) => {
    console.error('Failed to launch server');
    console.error(reason);
});
