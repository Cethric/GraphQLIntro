import {IResolvers} from "graphql-tools";
import {IDatabaseContext} from "../data";
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
        insert_book: (source, {title, author}, context) => {
            return context.data.insertBook(title, author);
        }
    },
}

export {
    resolvers,
}
