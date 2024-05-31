const express = require("express");
const router = express.Router();
const {getDataFromMongoDB} = require("../db.js");
router.get("/foodData", async (req, res) => {
  try {
    const { data, catData } = await getDataFromMongoDB();
    res.send([data,catData]);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});
module.exports = router;
