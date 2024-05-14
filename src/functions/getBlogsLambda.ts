import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
  try {
    const data = await docClient.send(
      new ScanCommand({
        TableName: 'blogs-dev',
      }),
    );
    return { body: JSON.stringify(data) };
  } catch (err) {
    return { error: err };
  }
};
