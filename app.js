// Lesson 6: Creating a Search Form
// Lesson 7: Wiring up the User Interface
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const weather = require("./public/utils/weather");

const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);
const partialsPath = path.join(__dirname, "partials");
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "My title",
    name: "Hafizh",
  });
});

app.get("/weather", (req, res) => {
  weather(req.query.address, (error, data) => {
    res.send(data);
  });
});
app.get("/search-weather", (req, res) => {
  res.render("search-weather");
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Hafizh Auliansyah",
    errorMessage: "Page not found.",
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
