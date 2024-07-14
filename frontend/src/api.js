import axios from 'axios';

export const fetchFoodItem = async (barcode) => {
  const response = await axios.post('http://localhost:3000/api/foodItem', { barcode });
  return response.data;
};

export const checkToxicity = async (ingredients) => {
  const response = await axios.post('http://localhost:3000/api/toxicity', { ingredients });
  return response.data;
};

export const findNearestVet = () => {
  // Implement the logic to find the nearest vet using an API like Google Maps
};
