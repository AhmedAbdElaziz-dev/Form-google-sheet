const express = require("express");
const app = express();

app.set("view-engine", "ejs");
app.use("/styles", express.static(__dirname + "/styles"));
app.use("/js", express.static(__dirname + "/js"));
app.get("/", async (req, res) => {
  res.render("form.ejs");
});

app.listen(3000);
