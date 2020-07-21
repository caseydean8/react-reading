const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://dbCaseyDean:Cdc108mn@cluster0-adjxe.mongodb.net/reactreadinglist?retryWrites=true&w=majority";
// const client = new MongoClient(process.env.MONGODB_URI || uri, {
//   useNewUrlParser: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dbCaseyDean:Cdc108mng@cluster0-adjxe.mongodb.net/reactreadinglist?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // {
  //   useUnifiedTopology: true,
  // }
);

//mlab config vars
// mongodb://heroku_hhwwqsn9:2j67oq98qrqj1cm7sn7vur7c@ds235768.mlab.com:35768/heroku_hhwwqsn9

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
