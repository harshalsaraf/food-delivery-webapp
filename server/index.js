const express = require("express");
const app = express();
const port = 5555;
//const { connectToMongoDB } = require("./db.js");

const {
  connectToMongoDB,
  getDataFromMongoDB,
  closeMongoDBConnection,
} = require('./db.js'); // Adjust the path accordingly

async function fetchData() {
  try {
    // Connect to MongoDB
    await connectToMongoDB();

  } catch (error) {
    console.error('Error:', error.message);
  } 
}

// Call your function
fetchData();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("<p>server online</p>");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
