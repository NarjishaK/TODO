const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb://0.0.0.0:27017/Todo"
  )
  .then(() => {
    console.log("Server connected successfully");
    console.log("http://localhost:8001");
  })
  .catch((err) => {
    console.error("Error occurred in database connection\n", err);
  });
}

module.exports = connectDB;
