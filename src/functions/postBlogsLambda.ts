import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const docClient = DynamoDBDocumentClient.from(client);

const handler = async () => {
  try {
    const input = {
      TableName: 'blogs-dev',
      Item: {
        blog_id: '11',
        blog_author: 'Neil harrison',
        blog_title: 'Microservice',
      },
    };
    const command = new PutCommand(input);
    docClient.send(command);

    return { body: 'Successfully created item!' };
  } catch (err) {
    return { error: err };
  }
};

export default handler;
