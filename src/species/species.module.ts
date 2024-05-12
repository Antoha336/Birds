import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './species.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Species])],
  exports: [TypeOrmModule]
})
export class SpeciesModule {}
