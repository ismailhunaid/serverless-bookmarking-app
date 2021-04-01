const { gql } = require('apollo-server-lambda')

const typeDefs = gql`

type Query {
    bookmark:[Bookmark]
    name:String

}
type Bookmark {
    id:ID
    url:String
    description:String
}
type Mutation {
    addBookmark(input:AddBookmarkInput):Bookmark
    deleteBookmark(input:DeleteBookmarkInput):Bookmark
}
input AddBookmarkInput {
    url:String!
    description:String
}
input DeleteBookmarkInput {
    id:ID!
}



`;

module.exports = {
    typeDefs
}