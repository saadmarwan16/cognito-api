import { Controller, Get, Path, Route } from 'tsoa';

@Route('/api')
export class ArticleController extends Controller {
	@Get()
	public getBase() {
		return {
			message: 'Hello, world',
		};
	}

	@Get('/{id}')
	public getBaseId(@Path('id') id: string) {
		return {
			message: `Hello, world with id of ${id}`,
		};
	}
}
