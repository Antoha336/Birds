import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Observation } from './observation.entity';
import { ObservationController } from './observation.controller';
import { ObservationService } from './observation.service';
import { HttpModule } from '@nestjs/axios';
import { PredictionModule } from 'src/prediction/prediction.module';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Observation]), HttpModule, PredictionModule, UserModule],
  controllers: [ObservationController],
  providers: [ObservationService],
  exports: [TypeOrmModule],
})
export class ObservationModule {}
