const express = require("express")
const graphqlHttp = require("express-graphql").graphqlHTTP
const mongoose = require("mongoose")
const graphqlSchema = require("../graphql/schema")
const graphqlResolvers = require("../graphql/resolvers")
const cors = require("cors")
const app = express()

const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}
 
app.use(cors(corsOptions)) 

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  }))
  var DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  console.log(DATABASE_URL);
  mongoose  
  .connect(`mongodb://${DATABASE_URL}/products_db`)
  .then(() => app.listen((process.env.PORT || 8081), console.log("Server is running")))
  .catch(error => {
    throw error
  })

