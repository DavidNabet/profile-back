import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Profile {
        _id: ID!
        name: String!
        email: String!
        content: String!
        date: Date
    }

    scalar Date

    # Query
    type Query {
        getProfile(_id: ID!): Profile
        allProfiles: [Profile]
    }

    input ProfileInput {
        name: String!
        email: String!
        content: String!
    }

    input ProfileUpdateInput {
        name: String
        content: String
    }

    # Mutation
    type Mutation {
        createProfile(input: ProfileInput): Profile
        updateProfile(_id: ID!, input: ProfileUpdateInput):Profile
        deleteProfile(_id: ID!): Profile
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
