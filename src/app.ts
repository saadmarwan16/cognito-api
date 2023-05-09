import express, {
	json,
	urlencoded,
	Request,
	Response,
	NextFunction,
} from 'express';
import { RegisterRoutes } from '../build/routes';
// import { serve, setup } from 'swagger-ui-express';
import { serve, generateHTML } from 'swagger-ui-express';
import docs from '../build/swagger.json';

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// app.use(
// 	'/docs',
// 	serve,
// 	setup(docs, {
// 		customSiteTitle: 'Kuumba Documentation',
// 		customfavIcon: 'url',
// 		swaggerOptions: { validatorUrl: null },
// 	})
// );

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use('/docs', serve, (_req: Request, res: Response) => {
	return res.send(generateHTML(docs));
});

RegisterRoutes(app);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_req: Request, res: Response, _next: NextFunction) => {
	return res.status(404).send({ status: 'not found' });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
	return res.status(500).json({
		message: 'Something really unexpected happened',
	});
});
