const mongoose = require("mongoose");
const mongourl =
  "mongodburl";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

const getDataFromMongoDB = async () => {
  try {
    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();

    const catCollection = mongoose.connection.db.collection("food_category");
    const catData = await catCollection.find({}).toArray();

    return { data, catData };
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error.message);
    throw error;
  }
};

const closeMongoDBConnection = async () => {
  await mongoose.connection.close();
  console.log("Disconnected from MongoDB");
};

module.exports = {
  connectToMongoDB,
  getDataFromMongoDB,
  closeMongoDBConnection,
};
