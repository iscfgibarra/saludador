var express = require("express");
var app = express();
const path = require("path");
const Messenger = require("../lib/messenger");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  let mesenger;
  mesenger = new Messenger("ES");
  var message = mesenger.getMessage();
  res.render(path.join(__dirname + "/views/index"), { message: message });
});

app.get("/saludar", function(req, res) {
  let hora = req.query["hora"];
  let idioma = req.query["lang"];

  let times = hora.split(":");
  let h = Number.parseInt(times[0]);
  let m = Number.parseInt(times[1]);

  let mesenger;
  mesenger = new Messenger(idioma);
  var message = mesenger.getMessage(new Date(2020, 02, 11, h, m));
  res.render(path.join(__dirname + "/views/saludar"), { message: message });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
