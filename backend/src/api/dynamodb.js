import AWS from 'aws-sdk';
AWS.config.update({ region: 'us-east-2' }); // Update to your AWS region

const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'CatToxicityInfo';

export const checkIngredientInDB = async (ingredient) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { 'ingredient': ingredient }
  };
  
  try {
    const data = await docClient.get(params).promise();
    // console.log(data.Item)
    return data.Item;
  } catch (err) {
    console.error('Error checking ingredient in DB:', err);
    throw new Error('Error checking ingredient in DB');
  }
};

export const addIngredientToDB = async (ingredient, toxicInfo) => {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      'ingredient': ingredient,
    //   'type': toxicInfo.type,
      'toxicityAmount': toxicInfo.toxicityAmount,
      'symptoms': toxicInfo.symptoms,
      'toxicityLevel': toxicInfo.toxicityLevel
    }
  };

  try {
    console.log(params)
    await docClient.put(params).promise();
  } catch (err) {
    console.error('Error adding ingredient to DB:', err);
    throw new Error('Error adding ingredient to DB');
  }
};
