import { Controller, Get, Path, Route } from 'tsoa';

@Route('/api')
export class BaseController extends Controller {
	@Get()
	public getBase() {
		return {
			message: 'Hello, world from updated',
		};
	}

	@Get('/{id}')
	public getBaseId(@Path('id') id: string) {
		return {
			message: `Hello, world from updated with id of ${id}`,
		};
	}
}
