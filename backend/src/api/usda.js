import axios from 'axios';
import dotenv from "dotenv";

dotenv.config()


const getFoodItem = async (barcode) => {
  try {
    const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${barcode}&pageSize=10&api_key=${process.env.USDA_API_KEY}`);
    if (response.data && response.data.foods && response.data.foods.length > 0) {
        const foodItem = response.data.foods[0];
        // Split ingredients string into an array
        foodItem.ingredients = foodItem.ingredients ? foodItem.ingredients.split(',').map(ingredient => ingredient.trim()) : [];
        return foodItem;    
    } else {
        console.log('No food item found')
        return null; // No food items found
    }
    } catch (error) {
        console.error('Error fetching food item:', error);
        return null; // Return null in case of an error
    }
};

export default getFoodItem
