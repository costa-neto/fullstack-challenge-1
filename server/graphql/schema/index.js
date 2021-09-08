const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Product {
    id: String!
    price: Float!
    shortDescription: String!
    description: String!,
    lastUpdate: String!,
    category: String!,
    image: String!
  }

  type Query {
    products:[Product!],
    productDetails(id: String!): Product 
  }

  schema {
    query: Query,
  }
`)