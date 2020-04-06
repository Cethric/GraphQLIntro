import {IFieldResolver} from "graphql-tools/dist/Interfaces";
import {IDatabaseContext} from "../../data/IDatabase";

export default {
    insert_book: (source, args, context) => {
        return context.data.insertBook(args.title, args.author);
    }
} as {
    insert_book: IFieldResolver<any, IDatabaseContext, { title: string; author: string }>
}