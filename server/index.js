const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

const db = require("./queries");

app.get("/helloWorld", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/", db.getCampaigns);
app.get("/campaign-details/:id", db.getCampaignById);
app.post("/createCampaign", db.createCampaign);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
