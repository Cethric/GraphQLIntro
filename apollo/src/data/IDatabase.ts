import {Context, ContextFunction} from "apollo-server-core";
import {ExpressContext} from "apollo-server-express/src/ApolloServer";
import {Book} from "../types/book";

interface IDatabase {
    book(title: string): Book | null;

    books(): Book[];

    insertBook(title: string, author: string): boolean;
}

interface IDatabaseContext {
    data: IDatabase;
}


type DatabaseResolverContext = Context<IDatabaseContext>
type DatabaseResolverContextFunction =
    ContextFunction<ExpressContext, DatabaseResolverContext>
    | DatabaseResolverContext;

export {
    IDatabase,
    IDatabaseContext,
    DatabaseResolverContextFunction,
};
