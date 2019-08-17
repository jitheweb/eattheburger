// *********************************************************************************
// The initial starting point for our good burger app...
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Set up Express
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var routes = require("./controllers/burgers_controller.js")
app.use(routes);

// Start the server
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
