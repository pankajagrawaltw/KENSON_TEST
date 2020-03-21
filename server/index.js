const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const mysql = require('mysql');
const cors = require('cors');
const root = require('./GrphRootValue');
const schema = require('./GrpSchema');
const app = express();
app.use(cors());

app.use((req, res, next) => {
  req.mysqlDb = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '<bgLN@C}eS89=mrU',
    database: 'testUsers'
  });
  req.mysqlDb.connect();
  next();
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
