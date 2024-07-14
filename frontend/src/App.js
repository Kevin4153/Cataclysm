import React, { useState } from 'react';
import BarcodeScanner from './components/BarcodeScanner';
import FoodItemDetails from './components/FoodItemDetails';
import ToxicityReport from './components/ToxicityReport';
import { fetchFoodItem, checkToxicity, findNearestVet } from './api';

const App = () => {
  const [barcode, setBarcode] = useState(null);
  const [foodItem, setFoodItem] = useState(null);
  const [toxicityReport, setToxicityReport] = useState(null);

  const handleBarcodeDetected = async (barcode) => {
    setBarcode(barcode);
    const foodItem = await fetchFoodItem(barcode);
    setFoodItem(foodItem);
    
    const report = await checkToxicity(foodItem.ingredients);
    setToxicityReport(report);
  };

  return (
    <div>
      <h1>Cat Toxicity Scanner</h1>
      <BarcodeScanner onBarcodeDetected={handleBarcodeDetected} />
      {foodItem && <FoodItemDetails foodItem={foodItem} />}
      {toxicityReport && <ToxicityReport report={toxicityReport} />}
      <button onClick={findNearestVet}>Find Nearest Emergency Vet</button>
    </div>
  );
};

export default App;
