const axios = require('axios');

const getFoodItem = async (barcode) => {
  const response = await axios.get(`https://api.usda.gov/fdc/v1/foods/search?query=${barcode}&pageSize=10&api_key=${process.env.USDA_API_KEY}`);
  return response.data;
};

module.exports = { getFoodItem };
