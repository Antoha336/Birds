import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ObservationModule } from './observation/observation.module';
import { OrderModule } from './order/order.module';
import { PredictionModule } from './prediction/prediction.module';
import { SpeciesModule } from './species/species.module';

import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ObservationModule,
    OrderModule,
    PredictionModule,
    SpeciesModule
  ]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
