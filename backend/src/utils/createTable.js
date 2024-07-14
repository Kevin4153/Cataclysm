const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient({ region: 'us-east-2' });

const input = {
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" },
    { AttributeName: "toxicity-level", AttributeType: "N" }
  ],
  TableName: "CatToxicityInfo",
  KeySchema: [
    { AttributeName: "name", KeyType: "HASH" }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: "toxicity",
      KeySchema: [
        { AttributeName: "toxicity-level", KeyType: "HASH" }
      ],
      Projection: { ProjectionType: "ALL" },
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
    }
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
};

const command = new CreateTableCommand(input);

(async () => {
  try {
    const results = await dbclient.send(command);
    console.log("Table created successfully:", results);
  } catch (err) {
    console.error("Error creating table:", err);
  }
})();
