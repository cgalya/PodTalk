const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

app.use("/", routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});