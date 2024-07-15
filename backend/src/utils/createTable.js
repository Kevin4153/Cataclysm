import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const dbclient = new DynamoDBClient({ region: 'us-east-2' });

const input = {
  AttributeDefinitions: [
    { AttributeName: "ingredient", AttributeType: "S" },
    { AttributeName: "toxicityLevel", AttributeType: "N" }
  ],
  TableName: "CatToxicityInfo",
  KeySchema: [
    { AttributeName: "ingredient", KeyType: "HASH" }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: "toxicity",
      KeySchema: [
        { AttributeName: "toxicityLevel", KeyType: "HASH" }
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
