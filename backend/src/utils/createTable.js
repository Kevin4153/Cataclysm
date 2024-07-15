import { DynamoDBClient, CreateTableCommand, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

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

const createTableIfNotExists = async () => {
  try {
    // Check if table exists
    const describeCommand = new DescribeTableCommand({ TableName: input.TableName });
    await dbclient.send(describeCommand);
    console.log(`Table "${input.TableName}" already exists.`);
  } catch (err) {
    if (err.name === 'ResourceNotFoundException') {
      // Table does not exist, create it
      const createCommand = new CreateTableCommand(input);
      try {
        const results = await dbclient.send(createCommand);
        console.log("Table created successfully:", results);
      } catch (createErr) {
        console.error("Error creating table:", createErr);
      }
    } else {
      console.error("Error describing table:", err);
    }
  }
};

createTableIfNotExists();
