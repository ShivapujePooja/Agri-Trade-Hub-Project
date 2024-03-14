const express = require("express");
const router = express.Router();
const order_data = require("../models/api_data");

router.get("/", async (req, res) => {
  try {
    const custdatas = await order_data.find();
    res.json(custdatas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const {
    image,
    name,
    price,
    description,
    rating,
    reviews,
    availability,
    // shippingInformation,
  } = req.body;

  const custdata = new order_data({
    image,
    name,
    price,
    description,
    rating,
    reviews,
    availability,
    // shippingInformation,
  });

  try {
    const saved_data = await custdata.save();
    res.json({ saved_data });
  } catch (err) {
    res.status(500).send("Error : " + err);
  }
});

module.exports = router;
