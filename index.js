
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
const mongoose = require('mongoose')
app.use(express.json())

var route = require('./Routes/DataRoutes');
const connectionURL ="mongodb+srv://nikita:n12345678@cluster0.jgpif.mongodb.net/nik"
const  mongooose = require("mongoose")
const connectDB = (DB_CONNECTION_URL) => {
  console.log("DB trying to connect on " + new Date());

  const options = {
    useNewUrlParser: true,
    // useFind: true,
    useUnifiedTopology: true
  };
  return mongooose.connect(DB_CONNECTION_URL, options);
};
connectDB(connectionURL)


app.use(route)
app.listen(4000, function () {
    console.log('app listening on port: ' + 4000);
});

