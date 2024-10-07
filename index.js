const express = require("express");
const path = require("path");
const chalk = require("chalk");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", async function (req, res) {
  res.sendFile(path.join(__dirname, "My.html"));
});

app.listen(port, () => {
  console.log(chalk.hex('#ffcc00')(`رينننن بورت: ${port}`));
});

module.exports = app
