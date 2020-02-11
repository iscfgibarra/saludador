var express = require("express");
var app = express();
const path = require("path");
const Messenger = require("../lib/messenger");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  //res.send('Hello World!');
  //res.sendFile('./views/index.html');
  let mesenger;
  mesenger = new Messenger("ES");
  var message = mesenger.getMessage();
  res.render(path.join(__dirname + "/views/index"), { message: message });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
