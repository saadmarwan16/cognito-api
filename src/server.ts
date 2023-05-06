// import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
// import { config } from 'dotenv';
import { app } from './app';
// import { createProductsTableIfDoesNotExist } from './util/createProductsTableIfDoesNotExist';

// const port = config.get('server.port');

// setImmediate(async () => {
// 	await createProductsTableIfDoesNotExist(
// 		new DynamoDBClient(config.get('dynamodb'))
// 	);
// });

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
