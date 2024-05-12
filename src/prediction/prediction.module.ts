import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prediction } from './prediction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prediction])],
  exports: [TypeOrmModule]
})
export class PredictionModule {}
