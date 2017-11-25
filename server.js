const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const db = require("./models");
const session = require("express-session");
const passport = require("./config/passport");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);

//use passport for auth
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`🌎 ==> Server now on port ${PORT}!`);
    });

});