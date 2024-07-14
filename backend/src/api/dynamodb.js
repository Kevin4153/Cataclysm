const AWS = require('aws-sdk');
AWS.config.update({ region: 'YOUR_REGION' });

const docClient = new AWS.DynamoDB.DocumentClient();

const checkIngredientInDB = async (ingredient) => {
  const params = {
    TableName: 'YOUR_TABLE_NAME',
    Key: { 'ingredient': ingredient }
  };
  
  const data = await docClient.get(params).promise();
  return data.Item;
};

const addIngredientToDB = async (ingredient, toxicInfo) => {
  const params = {
    TableName: 'YOUR_TABLE_NAME',
    Item: { 'ingredient': ingredient, ...toxicInfo }
  };

  await docClient.put(params).promise();
};

module.exports = { checkIngredientInDB, addIngredientToDB };
