const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Home Page");
  console.log(`Inside Request Home ${req.method}`);

  next();
});

app.get("/login", (req, res, next) => {
  res.send("Login Page");
  console.log(`Inside Request Login ${req.method}`);

  next();
});

app.get("/register", (req, res, next) => {
  res.send("Register Page");
  console.log(`Inside Request Register ${req.originalUrl}`);

  next();
});

app.listen(3000);
