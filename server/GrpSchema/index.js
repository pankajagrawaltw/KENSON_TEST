const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type User {
    id: String
    name: String
    phone: Int
    email: String
    address : String
    zip_code : Int
  }
  type Query {
    getUsers: [User],
    getUserInfo(id: Int) : User
  }
  type Mutation {
    createUser(name: String phone: Int email: String address : String zip_code : Int) : Boolean
  }
`);
module.exports = schema;
