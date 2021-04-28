const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "server ok",
  });
});

app.listen(process.env.PORT, () =>
  console.log(`
🚀 Server ready at port ${process.env.PORT}
`)
);
