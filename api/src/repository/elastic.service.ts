import { Injectable } from '@nestjs/common';

import { BlastData } from './blast-data.interface';
import { BlastDto } from './blast-dto.interface';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticService {
	private readonly BLASTS_INDEX: string = 'blasts';

	constructor(private readonly client: ElasticsearchService) {}

	public async get(
		latitude,
		longitude,
		maxDistance = '20km',
		size = 20,
		from = 0
	) {
		return this.client.search({
			index: this.BLASTS_INDEX,
			body: {
				query: {
					bool: {
						must: {
							match_all: {},
						},
						filter: {
							geo_distance: {
								'distance': maxDistance,
								'pin.location': `${latitude},${longitude}`,
							},
						},
					},
				},
				sort: [
					{
						_geo_distance: {
							'pin.location': `${latitude},${longitude}`,
							'order': 'asc',
							'unit': 'km',
							'mode': 'min',
						},
					},
				],
				from: from,
				size: size,
			},
		});
	}

	public async put(blast: BlastDto) {
		return this.client.index({
			index: this.BLASTS_INDEX,
			body: this.enrich(blast),
		});
	}

	public async vote(blastId: string, direction: 'UP' | 'DOWN') {
		return this.client.update({
			id: blastId,
			index: this.BLASTS_INDEX,
			body: {
				script: {
					source: `ctx._source.score += ${direction === 'UP' ? '+1' : '-1'}`,
					lang: 'painless',
				},
			},
		});
	}

	private enrich(blast: BlastDto): BlastData {
		return {
			message: blast.message,
			location: {
				lat: blast.latitude,
				lon: blast.longitude,
			},
			date: new Date().toISOString().substr(0, 19),
			score: 0,
		};
	}
}
