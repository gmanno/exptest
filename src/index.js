const express = require("express");
// require("dotenv").config();

const port = process.env.PORT || 3000;


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "server ok",
  });
});

app.listen(port, () =>
  console.log(`
🚀 Server ready at port ${port}
`)
);
