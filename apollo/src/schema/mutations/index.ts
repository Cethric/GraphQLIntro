import {gql} from 'apollo-server';

export default gql`
    type Mutation {
        insert_book(title:String! author:String!): Boolean!
    }
`;