import {IResolvers} from "graphql-tools";
import {IDatabaseContext} from "../data/IDatabase";
import {IFieldResolver} from "graphql-tools/dist/Interfaces";

interface Resolvers extends IResolvers<any, IDatabaseContext> {
    Query: {
        books: IFieldResolver<any, IDatabaseContext, {}>;
        book: IFieldResolver<any, IDatabaseContext, { title: string }>;
    };
    Mutation: {
        insert_book: IFieldResolver<any, IDatabaseContext, { title: string; author: string }>;
    };
}

const resolvers: Resolvers = {
    Query: {
        books: (source, args, context) => {
            return context.data.books();
        },
        book: (source, {title}, context) => {
            return context.data.book(title);
        },
    },
    Mutation: {
        insert_book: (source, args, context) => {
            return context.data.insertBook(args.title, args.author);
        }
    },
}

export {
    resolvers,
}