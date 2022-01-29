const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`yo server is running`);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running at ${port}`);
  }
});
