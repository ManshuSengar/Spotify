export const typeDefs = `#graphql
    type LoginOutput{
        token : String
    }
    type Query {
        login(email:String!,password:String!):LoginOutput
        register(email:String!,password:String!,fistName:String!,lastName:String):LoginOutput
    }
    
`