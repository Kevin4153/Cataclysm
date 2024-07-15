import express from 'express';
import getFoodItem from '../api/usda.js';

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

export default router;
