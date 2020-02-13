var express = require("express");
var app = express();
const path = require("path");
const Messenger = require("../lib/messenger");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render(path.join(__dirname + "/views/index"));
});

app.get("/saludar", function(req, res) {
  let hora = req.query["hora"];
  let idioma = req.query["lang"];

  let times = hora.split(":");
  let h = Number.parseInt(times[0]);
  let m = Number.parseInt(times[1]);

  try {
    let mesenger;
    mesenger = new Messenger(idioma);
    var message = mesenger.getMessage(h, m);
    res.render(path.join(__dirname + "/views/saludar"), { message: message });
  } catch (error) {
    res.render(path.join(__dirname + "/views/index"));
  }
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
