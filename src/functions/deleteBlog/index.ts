import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
  try {
    const command = new DeleteCommand({
      TableName: 'blogs-dev',
      Key: {
        blog_id: '11',
      },
    });
    docClient.send(command);

    return { body: 'Successfully deleted item!' };
  } catch (err) {
    return { error: err };
  }
};
