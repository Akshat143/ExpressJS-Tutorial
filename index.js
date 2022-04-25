const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`Server is Woring on port: ${port}`);
});

// app.post("/api/v1/login", (req, res) => {
//   res.send(`<h1>DONE!! Mr. ${req.body.name}</h1>
//             <h2> Your email is ${req.body.email} </h2>
//             <h3> Your password ${req.body.password} `);
//   console.log(req.body);
// });
