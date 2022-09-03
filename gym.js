const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 3000;

app.use("/static", express.static("static"));

app.use(express.urlencoded());

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.status(200).render("gym.pug");
});

app.post("/", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let gender = req.body.gender;
  let address = req.body.address;
  let more = req.body.more;
  let outputWrite = `
    User name is "${name}"
    His/Her age is "${age}" 
    Gender is "${gender}" 
    Address is "${address}"
    More about him/her "${more}"`;
  fs.writeFileSync("Details.txt", outputWrite);
  const MSG = { message: "You form Has Been Successfully Submmited" };
  res.status(200).render("gym.pug", MSG);
});

app.listen(port, () => {
  console.log(`server is running at port :${port} `);
});
