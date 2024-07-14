const axios = require('axios');

const getFoodItem = async (barcode) => {
  const response = await axios.get(`https://api.usda.gov/.../food/${barcode}`, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });
  return response.data;
};

module.exports = { getFoodItem };
