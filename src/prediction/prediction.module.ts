import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prediction } from './prediction.entity';
import { PredictionService } from './prediction.service';
import { SpeciesModule } from 'src/species/species.module';

@Module({
  imports: [TypeOrmModule.forFeature([Prediction]), SpeciesModule],
  providers: [PredictionService],
  exports: [TypeOrmModule, PredictionService],
})
export class PredictionModule {}
