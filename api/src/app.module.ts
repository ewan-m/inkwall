import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { AppController } from './app.controller';
import { ElasticService } from './repository/elastic.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ElasticsearchModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (config: ConfigService) => ({
				node: config.get<string>('ELASTIC_NODE'),
			}),
		}),
		HttpModule,
	],
	controllers: [AppController],
	providers: [ElasticService],
})
export class AppModule {}
