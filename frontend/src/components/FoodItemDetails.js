import React from 'react';

const FoodItemDetails = ({ foodItem }) => (
  <div>
    <h2>Food Item Details</h2>
    <p>Name: {foodItem.name}</p>
    <p>Ingredients: {foodItem.ingredients.join(', ')}</p>
  </div>
);

export default FoodItemDetails;
