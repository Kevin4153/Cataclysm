import React from 'react';

const ToxicityReport = ({ report }) => (
  <div>
    <h2>Toxicity Report</h2>
    {report.map((item, index) => (
      <div key={index}>
        <p>Ingredient: {item.ingredient}</p>
        <p>Toxicity Level: {item.toxicityLevel}</p>
        <p>Toxicity Amount: {item.toxicityAmount}</p>
        <p>Symptoms: {item.symptoms.join(', ')}</p>
      </div>
    ))}
  </div>
);

export default ToxicityReport;
