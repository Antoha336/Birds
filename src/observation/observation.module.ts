import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Observation } from './observation.entity';
import { ObservationController } from './observation.controller';
import { ObservationService } from './observation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Observation])],
  exports: [TypeOrmModule],
  controllers: [ObservationController],
  providers: [ObservationService]
})
export class ObservationModule {}
