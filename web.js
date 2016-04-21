var express = require("express");
var app = express();
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // pull information from html in POST
app.use(methodOverride());  // simulate DELETE and PUT
//app.use(express.logger());
app.use("/", express.static(__dirname));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
