import { Controller, Get, Post, Query } from '@nestjs/common';
import { ElasticService } from './repository/elastic.service';

@Controller()
export class AppController {
	constructor(private readonly store: ElasticService) {}

	@Get('blasts')
	public async get(
		@Query('latitude') latitude?: number,
		@Query('longitude') longitude?: number,
		@Query('distance') distance?: string,
		@Query('from') from?: number
	) {
		const result = await this.store.get(latitude, longitude, distance, 20, from);
	}

	@Post()
	public post() {}
}
