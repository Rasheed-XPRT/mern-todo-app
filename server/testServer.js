const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello from test server!"));

app.listen(8080, "0.0.0.0", () => {
  console.log("✅ Test server running at http://127.0.0.1:8080");
});

