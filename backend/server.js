const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`Ohh yaa Blog server is running`);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running at ${PORT}`);
  }
});
