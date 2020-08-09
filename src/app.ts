import * as express from 'express'

class App {
	private server: express.Application;

	constructor() {
		this.server = express();
		this.middlewares;
	}

	middlewares() {
		this.server.use(express.json());
	}

	public getServer() {
		return this.server;
	}
	
}

export default new App();