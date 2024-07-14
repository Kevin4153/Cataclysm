const express = require('express');
const { getFoodItem } = require('../api/usda');
const router = express.Router();

router.post('/', async (req, res) => {
  const { barcode } = req.body;
  try {
    const foodItem = await getFoodItem(barcode);
    res.json(foodItem);
  } catch (error) {
    res.status(500).send('Error fetching food item');
  }
});

module.exports = router;
