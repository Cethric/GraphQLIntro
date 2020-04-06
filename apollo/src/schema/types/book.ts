import {gql} from 'apollo-server';

export const bookType = gql`
    type Book {
        title: String
        author: String
    }
`;

