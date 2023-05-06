import express, { json, urlencoded, Request, Response } from 'express';
import { RegisterRoutes } from '../build/routes';
import { serve, generateHTML } from 'swagger-ui-express';

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use('/docs', serve, async (_req: Request, res: Response) => {
	return res.send(generateHTML(await import('../build/swagger.json')));
});

RegisterRoutes(app);

app.use((_req: Request, res: Response) => {
	return res.status(404).send({ status: 'not found' });
});

app.use((_err: Error, _req: Request, res: Response) => {
	return res.status(500).json({
		message: 'Some really unexpected happened',
	});
});

// npm i -g serverless && serverless \
//     --org=saadmarwan16 \
//     --app=auth0-tsoa \
//     --name=auth0-tsoa \
//     --template=aws-node-express-api
