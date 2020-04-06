import {IResolvers} from "graphql-tools";
import {IDatabaseContext} from "../data/IDatabase";
import queries from './queries';
import mutations from './mutations';

interface Resolvers extends IResolvers<any, IDatabaseContext> {
    Query: typeof queries,
    Mutation: typeof mutations,
}

const resolvers: Resolvers = {
    Query: queries,
    Mutation: mutations,
}

export {
    resolvers,
}