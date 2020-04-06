import {gql} from 'apollo-server';

const typeDefs = gql`# GraphQL Schema

type Book {
    title: String
    author: String
}

type Query {
    books: [Book]!

    book(title:String!): Book
}

type Mutation {
    insert_book(title:String! author:String!): Boolean!
}
`;


export default [typeDefs]