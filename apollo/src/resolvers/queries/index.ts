import {IFieldResolver} from "graphql-tools/dist/Interfaces";
import {IDatabaseContext} from "../../data/IDatabase";

export default {
    books: (source, args, context) => {
        return context.data.books();
    },
    book: (source, {title}, context) => {
        return context.data.book(title);
    },
} as {
    books: IFieldResolver<any, IDatabaseContext>,
    book: IFieldResolver<any, IDatabaseContext, { title: string }>,
}