//dependencies
const express = require("express");
const path = require("path");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
//file imports
const connect = require("./configurations/db");
const handler = require("./routes/handler");

//dotenv config
dotenv.config({ path: "./configurations/config.env" });

//establish database connection
connect();

//instantiate express
const app = express();
//to use body parser,api handler
app.use(express.json());
app.use("/api/transaction", handler);

//use morgan if in dev mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.use("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.cyan.bold);
});
