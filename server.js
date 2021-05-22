const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3010;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes defined
app.use(routes)

// Mongo DB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}!`);
});