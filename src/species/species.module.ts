import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './species.entity';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [TypeOrmModule.forFeature([Species]), OrderModule],
  controllers: [SpeciesController],
  providers: [SpeciesService],
  exports: [TypeOrmModule]
})
export class SpeciesModule {}
